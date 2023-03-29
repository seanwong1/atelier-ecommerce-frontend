  const createFeatureSet = (originalProduct, relatedProduct) => {
    // console.log('ogfeatures', originalProduct.features);
    // console.log('relatedfeatures', relatedProduct.features);
    var newFeatureSet = new Set();

    try {
      originalProduct.features.map((feature) => {
        newFeatureSet.add(feature.feature);
      });

      relatedProduct.features.map((feature) => {
        newFeatureSet.add(feature.feature);
      });
    } catch (err) {
      console.log(err);
    }

    return newFeatureSet;
  };

  export default createFeatureSet;