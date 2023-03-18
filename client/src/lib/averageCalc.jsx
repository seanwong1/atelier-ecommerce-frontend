const calculateAverage = (total, data) => {
  return Object.keys(data.ratings).reduce((acc, rating) => {
    return (acc + Number(rating) * Number(data.ratings[rating]));
  }, 0)/total;
}

export default calculateAverage;