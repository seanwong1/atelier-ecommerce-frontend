const calcTotal = (review) => {
  return Object.keys(review.data.ratings).reduce((acc, rating) => {
    return acc + Number(review.data.ratings[rating]);
  }, 0);
}

export default calcTotal;