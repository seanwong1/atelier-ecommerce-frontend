import {differenceInSeconds} from 'date-fns';

const threeYearsAgo = (9.467 * Math.pow(10, 7));
const timeWeight = .5;
const helpWeight = .5;
const currentDate = new Date();

const calcRel = (a, b) => {

  const t1 = differenceInSeconds(currentDate, new Date(a.date));
  const t2 = differenceInSeconds(currentDate, new Date(b.date));
  const aHelp = (a.helpfulness/20)*helpWeight;
  const bHelp = (b.helpfulness/20)*helpWeight;
  const aTime = ((threeYearsAgo - t1)/(threeYearsAgo))*timeWeight;
  const bTime = ((threeYearsAgo - t2)/(threeYearsAgo))*timeWeight;

  const aVal = aHelp + aTime;
  const bVal = bHelp + bTime;
  return [aVal, bVal];
}

export default calcRel;