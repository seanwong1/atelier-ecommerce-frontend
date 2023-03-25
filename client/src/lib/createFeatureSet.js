  const createFeatureSet = (originalProduct, relatedProduct) => {
    // console.log('ogfeatures', originalProduct.features);
    // console.log('relatedfeatures', relatedProduct.features);
    var newFeatureSet = new Set();

    newFeatureSet.add(originalProduct.features.map(
        (originalProductFeatures) => {
          console.log(originalProductFeatures);
          return originalProductFeatures['features'];
        }));

    newFeatureSet.add(relatedProduct.features.map(
        (relatedProductFeatures) => {
          console.log(relatedProductFeatures);
          return relatedProductFeatures['features'];
        }));

    return newFeatureSet;
  };

  export default createFeatureSet;