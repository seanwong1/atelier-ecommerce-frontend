import totalCalc from '../client/src/lib/totalCalc.jsx';
import averageCalc from '../client/src/lib/averageCalc.jsx';
import percentCalc from '../client/src/lib/percentHelper.jsx';
import relevanceCalc from '../client/src/lib/relevanceCalc.jsx';
import Reviews from '../client/src/components/Reviews.jsx';
import {differenceInSeconds, toISOString} from 'date-fns';

const makeRandomReview = (max) => {
  var output = {data: {ratings: {}}};
  for (var x = 1; x <= 5; x++) {
    output.data.ratings[x] = (Math.random() * max);
  }
  return output;
}

describe('Total and average calculation', () => {
  const review1 = {data: {ratings: {1: 5, 2: 5, 3: 5, 4: 5, 5: 5}}};
  const review2 = {data: {ratings: {1: 0, 2: 0, 3: 0, 4: 0, 5: 0}}};
  const review3 = {data: {ratings: {1: 3, 2: 7, 3: 12, 4: 5, 5: 6}}};
  const review4 = {data: {ratings: {1: 11, 2: 200, 3: 120, 4: 100, 5: 13}}};
  const review5 = {data: {ratings: {1: 1000, 2: 2000, 3: 3000, 4: 4000, 5: 5000}}};
  const reviewRan = makeRandomReview(100);

  const r1Total = 25;
  const r2Total = 0;
  const r3Total = 33;
  const r4Total = 444;
  const r5Total = 15000;
  const r1Average = 3;
  const r2Average = 0;
  const r3Average = 3.12;

  test('Correctly calculates total number of reviews', () => {
    expect(totalCalc(review1)).toBe(r1Total);
    expect(totalCalc(review2)).toBe(r2Total);
    expect(totalCalc(review3)).toBe(r3Total);
    expect(totalCalc(review4)).toBe(r4Total);
    expect(totalCalc(review5)).toBe(r5Total);
  })
  test('Correctly calculates total number of reviews', () => {
    expect(averageCalc(r1Total, review1.data)).toBe(r1Average);
    expect(averageCalc(r2Total, review2.data)).toBe(r2Average);
    expect(Math.round(averageCalc(r3Total, review3.data)*100)/100).toBe(r3Average);
    expect(averageCalc(totalCalc(reviewRan), reviewRan.data)).toBeGreaterThanOrEqual(1);
    expect(averageCalc(totalCalc(reviewRan), reviewRan.data)).toBeLessThanOrEqual(5);
  })
})

describe('Percent calculation', () => {
  test('Returns a percent as a whole number between 0 and 100', () => {
    expect(percentCalc(5, 100)).toBe(5);
    expect(percentCalc(20, 100)).toBe(20);
    expect(percentCalc(7, 10)).toBe(70);
    expect(percentCalc(5, 25)).toBe(20);
    expect(percentCalc(32, 124)).toBe(26);
  })
  test('Returns reciprocal percent when dir is added', () => {
    expect(percentCalc(5, 100, 1)).toBe(95);
    expect(percentCalc(20, 100, 1)).toBe(80);
    expect(percentCalc(7, 10, 1)).toBe(30);
    expect(percentCalc(5, 25, 1)).toBe(80);
    expect(percentCalc(32, 124, 1)).toBe(74);
  })

})

describe('Relevance calculation', () => {
  const currentDate = new Date();
  const threeDaysAgo = new Date(Date.now() - 3 * 24 * 60 * 60 * 1000);
  const tenDaysAgo = new Date(Date.now() - 10 * 24 * 60 * 60 * 1000);
  const thousandDaysAgo = new Date(Date.now() - 1000 * 24 * 60 * 60 * 1000);


  const helpfulReview = {helpfulness: 15};
  const sortOfHelpfulReview = {helpfulness: 5}
  const reallyHelpfulReview = {helpfulness: 40}
  const notHelpfulReview = {helpfulness: 0}

  const setDate = (review, date) => {
    review['date'] = date.toISOString();
    return review;
  }

  test('Should return higher number for higher helpfulness given same date', () => {
    const helpfulVSsortof = relevanceCalc(setDate(helpfulReview, currentDate), setDate(sortOfHelpfulReview, currentDate));
    const helpfulVSreally = relevanceCalc(setDate(helpfulReview, currentDate), setDate(reallyHelpfulReview, currentDate));
    const helpfulVSreally2 = relevanceCalc(setDate(helpfulReview, threeDaysAgo), setDate(reallyHelpfulReview, threeDaysAgo));
    const helpfulVShelpful = relevanceCalc(setDate(helpfulReview, currentDate), setDate(helpfulReview, currentDate));
    expect(helpfulVSsortof[0]).toBeGreaterThan(helpfulVSsortof[1]);
    expect(helpfulVSreally[0]).toBeLessThan(helpfulVSreally[1]);
    expect(helpfulVSreally2[0]).toBeLessThan(helpfulVSreally2[1]);
    expect(helpfulVShelpful[0]).toBe(helpfulVShelpful[1]);
  })

  test('Should return higher number for closer date given same helpfulness', () => {
    const helpfulVShelpful1 = relevanceCalc(setDate({helpfulness: 1}, threeDaysAgo), setDate({helpfulness: 1}, tenDaysAgo));
    const helpfulVShelpful2 = relevanceCalc(setDate({helpfulness: 5}, thousandDaysAgo), setDate({helpfulness: 5}, tenDaysAgo));
    const reallyVSreally1 = relevanceCalc(setDate({helpfulness: 5}, threeDaysAgo), setDate({helpfulness: 5}, tenDaysAgo));
    const reallyVSreally2 = relevanceCalc(setDate({helpfulness: 10}, threeDaysAgo), setDate({helpfulness: 10}, currentDate));

    expect(helpfulVShelpful1[0]).toBeGreaterThan(helpfulVShelpful1[1]);
    expect(helpfulVShelpful2[0]).toBeLessThan(helpfulVShelpful2[1]);
    expect(reallyVSreally1[0]).toBeGreaterThan(reallyVSreally1[1]);
    expect(reallyVSreally2[0]).toBeLessThan(reallyVSreally2[1]);
  })

  test('Lots of helpfulness should outweigh old dates and vice versa', () => {
    const helpfulOld = setDate({helpfulness: 25}, thousandDaysAgo)
    const unhelpNew = setDate({helpfulness: 3}, currentDate);
    const sorthelpOld = setDate({helpfulness: 15}, thousandDaysAgo);
    const hoVun = relevanceCalc(helpfulOld, unhelpNew);
    const unVuln = relevanceCalc(unhelpNew, sorthelpOld);
    expect(hoVun[0]).toBeGreaterThan(hoVun[1]);
    expect(unVuln[0]).toBeGreaterThan(unVuln[1]);
  })

})
