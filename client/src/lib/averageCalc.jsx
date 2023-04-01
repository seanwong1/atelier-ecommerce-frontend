const calculateAverage = (total, data) => {
  if (!total) {
    return 0;
  }

  const weightTotal = Object.keys(data.ratings).reduce((acc, rating) => {
    return (acc + Number(rating) * Number(data.ratings[rating]));
  }, 0);
  const output = weightTotal/total;
  return output;
}

export default calculateAverage;