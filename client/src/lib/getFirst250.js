const getFirst250 = (text) => {
  const textArray = text.split(' ');
  const outputString = textArray.reduce((acc, word) => {
    if ((acc.length + word.length) < 250) {
      acc = acc + word + ' ';
    }
    return acc;
  }, '')
  return outputString;
}

export default getFirst250;