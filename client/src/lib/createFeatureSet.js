  const createFeatureSet = (originalProduct, relatedProduct) => {
    // console.log('ogfeatures', originalProduct.features);
    // console.log('relatedfeatures', relatedProduct.features);
    var newFeatureSet = [];

    try {
      originalProduct.features.map((feature) => {
        newFeatureSet.push({
          'feature': feature.feature,
          'originalValue': feature.value
        });
      });

      relatedProduct.features.map((feature) => {
        for (var i = 0; i < Object.keys(newFeatureSet); i++) {
          if (Object.values(newFeatureSet).has(feature.feature)) {
            newFeatureSet[i]['relatedValue'] = feature.value;
          } else {
            newFeatureSet.push({
              'feature': feature.feature,
              'relatedValue': feature.value
            })
          }
        }
      });
    } catch (err) {
      console.log(err);
    }

    return newFeatureSet;
  };

  export default createFeatureSet;