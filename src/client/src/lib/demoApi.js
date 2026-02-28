const DEMO_ORIGIN = 'https://demo.local';

export const isDemoMode = process.env.DEMO_MODE === 'true';

const clone = (value) => JSON.parse(JSON.stringify(value));

const buildImage = (seed) => ({
  thumbnail_url: `https://picsum.photos/seed/${seed}-thumb/240/240`,
  url: `https://picsum.photos/seed/${seed}/1200/1200`,
});

const productCharacteristics = {
  71697: {
    Size: 101,
    Comfort: 102,
    Quality: 103,
    Fit: 104,
  },
  71698: {
    Width: 201,
    Comfort: 202,
    Quality: 203,
    Length: 204,
  },
  71699: {
    Size: 301,
    Width: 302,
    Comfort: 303,
    Quality: 304,
  },
  71700: {
    Fit: 401,
    Comfort: 402,
    Quality: 403,
    Length: 404,
  },
};

const demoStore = {
  products: {
    71697: {
      id: 71697,
      name: 'Summit Shell Jacket',
      slogan: 'Weather-ready layers without the bulk',
      description: 'A lightweight shell with clean lines, taped seams, and enough structure to work from trailhead to city commute.',
      category: 'Outerwear',
      default_price: '180',
      features: [
        { feature: 'Fabric', value: 'Recycled ripstop nylon' },
        { feature: 'Waterproof', value: '10k membrane' },
        { feature: 'Ventilation', value: 'Underarm zip vents' },
        { feature: 'Fit', value: 'Regular' },
      ],
    },
    71698: {
      id: 71698,
      name: 'Transit Knit Runner',
      slogan: 'Soft landings for everyday miles',
      description: 'A breathable knit runner with a stable heel and cushioned midsole for errands, travel, and easy runs.',
      category: 'Footwear',
      default_price: '140',
      features: [
        { feature: 'Upper', value: 'Engineered knit' },
        { feature: 'Midsole', value: 'Dual-density foam' },
        { feature: 'Outsole', value: 'High-abrasion rubber' },
        { feature: 'Drop', value: '8mm' },
      ],
    },
    71699: {
      id: 71699,
      name: 'Weekender Utility Pack',
      slogan: 'One bag for flights, trains, and daily carry',
      description: 'A structured travel pack with clamshell access, a padded laptop sleeve, and external quick-grab pockets.',
      category: 'Bags',
      default_price: '120',
      features: [
        { feature: 'Capacity', value: '28L' },
        { feature: 'Laptop Sleeve', value: '16-inch' },
        { feature: 'Water Resistance', value: 'DWR-coated exterior' },
        { feature: 'Harness', value: 'Padded shoulder straps' },
      ],
    },
    71700: {
      id: 71700,
      name: 'Field Fleece Pullover',
      slogan: 'Warmth you can throw on anywhere',
      description: 'A high-pile fleece pullover with snap placket, reinforced elbow panels, and a relaxed fit for layering.',
      category: 'Midlayers',
      default_price: '98',
      features: [
        { feature: 'Material', value: 'High-pile fleece' },
        { feature: 'Pockets', value: 'Two handwarmer pockets' },
        { feature: 'Closure', value: 'Snap placket' },
        { feature: 'Hem', value: 'Adjustable drawcord' },
      ],
    },
  },
  stylesByProductId: {
    71697: [
      {
        style_id: 9001,
        name: 'Glacier Blue',
        original_price: '180',
        sale_price: '149',
        'default?': true,
        photos: [buildImage('summit-blue-1'), buildImage('summit-blue-2'), buildImage('summit-blue-3')],
        skus: {
          11101: { quantity: 8, size: 'S' },
          11102: { quantity: 11, size: 'M' },
          11103: { quantity: 4, size: 'L' },
        },
      },
      {
        style_id: 9002,
        name: 'Basalt',
        original_price: '180',
        sale_price: null,
        'default?': false,
        photos: [buildImage('summit-black-1'), buildImage('summit-black-2'), buildImage('summit-black-3')],
        skus: {
          11104: { quantity: 9, size: 'S' },
          11105: { quantity: 7, size: 'M' },
          11106: { quantity: 5, size: 'L' },
        },
      },
    ],
    71698: [
      {
        style_id: 9101,
        name: 'Cloud White',
        original_price: '140',
        sale_price: null,
        'default?': true,
        photos: [buildImage('runner-white-1'), buildImage('runner-white-2'), buildImage('runner-white-3')],
        skus: {
          12101: { quantity: 6, size: '8' },
          12102: { quantity: 9, size: '9' },
          12103: { quantity: 12, size: '10' },
        },
      },
      {
        style_id: 9102,
        name: 'Signal Orange',
        original_price: '140',
        sale_price: '118',
        'default?': false,
        photos: [buildImage('runner-orange-1'), buildImage('runner-orange-2'), buildImage('runner-orange-3')],
        skus: {
          12104: { quantity: 3, size: '8' },
          12105: { quantity: 5, size: '9' },
          12106: { quantity: 8, size: '10' },
        },
      },
    ],
    71699: [
      {
        style_id: 9201,
        name: 'Stone',
        original_price: '120',
        sale_price: null,
        'default?': true,
        photos: [buildImage('pack-stone-1'), buildImage('pack-stone-2'), buildImage('pack-stone-3')],
        skus: {
          13101: { quantity: 15, size: 'One Size' },
        },
      },
      {
        style_id: 9202,
        name: 'Forest',
        original_price: '120',
        sale_price: '102',
        'default?': false,
        photos: [buildImage('pack-forest-1'), buildImage('pack-forest-2'), buildImage('pack-forest-3')],
        skus: {
          13102: { quantity: 12, size: 'One Size' },
        },
      },
    ],
    71700: [
      {
        style_id: 9301,
        name: 'Ivory',
        original_price: '98',
        sale_price: null,
        'default?': true,
        photos: [buildImage('fleece-ivory-1'), buildImage('fleece-ivory-2'), buildImage('fleece-ivory-3')],
        skus: {
          14101: { quantity: 5, size: 'S' },
          14102: { quantity: 7, size: 'M' },
          14103: { quantity: 6, size: 'L' },
        },
      },
      {
        style_id: 9302,
        name: 'Moss',
        original_price: '98',
        sale_price: null,
        'default?': false,
        photos: [buildImage('fleece-moss-1'), buildImage('fleece-moss-2'), buildImage('fleece-moss-3')],
        skus: {
          14104: { quantity: 4, size: 'S' },
          14105: { quantity: 9, size: 'M' },
          14106: { quantity: 8, size: 'L' },
        },
      },
    ],
  },
  relatedByProductId: {
    71697: [71698, 71699, 71700],
    71698: [71697, 71699, 71700],
    71699: [71697, 71698, 71700],
    71700: [71697, 71698, 71699],
  },
  questionsByProductId: {
    71697: [
      {
        question_id: 8001,
        question_body: 'How well does this jacket handle a full day of rain?',
        question_helpfulness: 9,
        reported: false,
        answers: {
          8501: {
            id: 8501,
            body: 'It handled a wet Portland commute with no issues. I would still layer for all-day storms.',
            date: '2025-09-18T00:00:00.000Z',
            answerer_name: 'Mara',
            helpfulness: 6,
            photos: [],
          },
          8502: {
            id: 8502,
            body: 'Seller here: the seam taping is solid, but it is still designed as a shell rather than an insulated raincoat.',
            date: '2025-09-20T00:00:00.000Z',
            answerer_name: 'Seller',
            helpfulness: 11,
            photos: [],
          },
        },
      },
      {
        question_id: 8002,
        question_body: 'Does it pack down small enough for travel?',
        question_helpfulness: 4,
        reported: false,
        answers: {
          8503: {
            id: 8503,
            body: 'Yes. I roll it into a cube and it disappears into my weekender.',
            date: '2025-10-02T00:00:00.000Z',
            answerer_name: 'Dylan',
            helpfulness: 3,
            photos: [],
          },
        },
      },
    ],
    71698: [
      {
        question_id: 8101,
        question_body: 'Are these true to size for everyday wear?',
        question_helpfulness: 7,
        reported: false,
        answers: {
          8601: {
            id: 8601,
            body: 'True to size for me. A little narrow in the toe box for wider feet.',
            date: '2025-08-12T00:00:00.000Z',
            answerer_name: 'Noah',
            helpfulness: 5,
            photos: [],
          },
        },
      },
    ],
    71699: [
      {
        question_id: 8201,
        question_body: 'Will this fit under an airline seat for short trips?',
        question_helpfulness: 5,
        reported: false,
        answers: {
          8701: {
            id: 8701,
            body: 'Yes on most domestic flights, especially if you do not overpack the front admin pocket.',
            date: '2025-07-01T00:00:00.000Z',
            answerer_name: 'Seller',
            helpfulness: 9,
            photos: [],
          },
        },
      },
    ],
    71700: [
      {
        question_id: 8301,
        question_body: 'Is the fleece bulky under a shell?',
        question_helpfulness: 3,
        reported: false,
        answers: {
          8801: {
            id: 8801,
            body: 'It layers well. The sleeves are smooth enough that it does not bunch up much.',
            date: '2025-11-06T00:00:00.000Z',
            answerer_name: 'Ari',
            helpfulness: 2,
            photos: [],
          },
        },
      },
    ],
  },
  reviewsByProductId: {
    71697: [
      {
        review_id: 90001,
        rating: 5,
        summary: 'Exactly what I wanted for shoulder-season trips',
        recommend: true,
        response: 'Thanks for the thoughtful review.',
        body: 'This shell feels light in a backpack but still blocks wind well on exposed trails. The cut leaves enough room for a midlayer and the pockets land in the right place when I am wearing a hip belt.',
        date: '2025-10-08T00:00:00.000Z',
        reviewer_name: 'Avery',
        helpfulness: 13,
        photos: [{ id: 1, url: buildImage('review-shell-1').url }],
        characteristics: { Size: 4, Comfort: 5, Quality: 5, Fit: 4 },
      },
      {
        review_id: 90002,
        rating: 4,
        summary: 'Great shell, slightly louder fabric than expected',
        recommend: true,
        response: null,
        body: 'The weather protection is strong and the hood adjusts nicely. My only complaint is that the face fabric has a little more swish than I prefer when walking around town.',
        date: '2025-09-14T00:00:00.000Z',
        reviewer_name: 'Jordan',
        helpfulness: 7,
        photos: [],
        characteristics: { Size: 3, Comfort: 4, Quality: 4, Fit: 3 },
      },
      {
        review_id: 90003,
        rating: 5,
        summary: 'Clean look, dependable in bad weather',
        recommend: true,
        response: null,
        body: 'I have worn this in a week of drizzle and gusty wind and it still looks sharp enough for meetings afterward. For a lightweight shell it feels unusually polished.',
        date: '2025-08-29T00:00:00.000Z',
        reviewer_name: 'Riley',
        helpfulness: 5,
        photos: [{ id: 2, url: buildImage('review-shell-2').url }],
        characteristics: { Size: 4, Comfort: 4, Quality: 5, Fit: 4 },
      },
    ],
    71698: [
      {
        review_id: 90101,
        rating: 4,
        summary: 'Comfortable for all-day city wear',
        recommend: true,
        response: null,
        body: 'The cushioning lands in a good middle ground for me. It is soft enough for walking all day but not mushy when I pick up the pace.',
        date: '2025-09-05T00:00:00.000Z',
        reviewer_name: 'Kai',
        helpfulness: 8,
        photos: [],
        characteristics: { Width: 3, Comfort: 4, Quality: 4, Length: 3 },
      },
      {
        review_id: 90102,
        rating: 5,
        summary: 'My travel shoe now',
        recommend: true,
        response: null,
        body: 'Easy to slip on, looks clean with jeans, and still feels stable enough for long airport days. I would buy this color again.',
        date: '2025-08-11T00:00:00.000Z',
        reviewer_name: 'Emerson',
        helpfulness: 6,
        photos: [{ id: 3, url: buildImage('review-runner-1').url }],
        characteristics: { Width: 3, Comfort: 5, Quality: 4, Length: 3 },
      },
    ],
    71699: [
      {
        review_id: 90201,
        rating: 5,
        summary: 'Thoughtful pockets and clean organization',
        recommend: true,
        response: null,
        body: 'The laptop sleeve is actually padded, the admin panel is usable, and the pack stands up on its own when set down. It has become my default overnight bag.',
        date: '2025-07-22T00:00:00.000Z',
        reviewer_name: 'Taylor',
        helpfulness: 10,
        photos: [],
        characteristics: { Size: 4, Width: 4, Comfort: 4, Quality: 5 },
      },
      {
        review_id: 90202,
        rating: 4,
        summary: 'Strong everyday pack',
        recommend: true,
        response: null,
        body: 'Looks refined enough for work and the straps remain comfortable under a full load. I wish the water bottle pocket stretched a bit more.',
        date: '2025-06-18T00:00:00.000Z',
        reviewer_name: 'Harper',
        helpfulness: 4,
        photos: [{ id: 4, url: buildImage('review-pack-1').url }],
        characteristics: { Size: 3, Width: 4, Comfort: 4, Quality: 4 },
      },
    ],
    71700: [
      {
        review_id: 90301,
        rating: 5,
        summary: 'Soft, warm, and easy to layer',
        recommend: true,
        response: null,
        body: 'The fleece has a nice loft without feeling too puffy under a shell. The snap placket also makes it easy to regulate temperature indoors.',
        date: '2025-11-13T00:00:00.000Z',
        reviewer_name: 'Quinn',
        helpfulness: 5,
        photos: [],
        characteristics: { Fit: 4, Comfort: 5, Quality: 4, Length: 3 },
      },
      {
        review_id: 90302,
        rating: 4,
        summary: 'Great camp layer',
        recommend: true,
        response: null,
        body: 'Warm enough for cool mornings and surprisingly durable around rough picnic tables and camp chairs. Slightly roomy through the body which I actually like.',
        date: '2025-10-01T00:00:00.000Z',
        reviewer_name: 'Sam',
        helpfulness: 3,
        photos: [],
        characteristics: { Fit: 4, Comfort: 4, Quality: 4, Length: 4 },
      },
    ],
  },
  clickEvents: [],
  cart: [],
  nextQuestionId: 8400,
  nextAnswerId: 8900,
  nextReviewId: 90400,
};

const mergeParams = (config) => {
  const url = new URL(config.url, DEMO_ORIGIN);
  const merged = {};

  url.searchParams.forEach((value, key) => {
    merged[key] = value;
  });

  if (config.params) {
    Object.keys(config.params).forEach((key) => {
      merged[key] = config.params[key];
    });
  }

  return merged;
};

const parseData = (data) => {
  if (typeof data === 'string') {
    try {
      return JSON.parse(data);
    } catch (err) {
      return data;
    }
  }

  return data || {};
};

const getReviewsForProduct = (productId) => {
  return demoStore.reviewsByProductId[productId] || [];
};

const getQuestionsForProduct = (productId) => {
  return demoStore.questionsByProductId[productId] || [];
};

const getCharacteristicNameById = (productId, characteristicId) => {
  const definition = productCharacteristics[productId] || {};

  return Object.keys(definition).find((name) => String(definition[name]) === String(characteristicId));
};

const buildMeta = (productId) => {
  const reviews = getReviewsForProduct(productId).filter((review) => !review.reported);
  const ratings = {};
  const recommended = { true: 0, false: 0 };
  const definition = productCharacteristics[productId] || {};
  const characteristicTotals = {};

  reviews.forEach((review) => {
    ratings[review.rating] = String((Number(ratings[review.rating]) || 0) + 1);
    recommended[String(Boolean(review.recommend))] += 1;

    Object.keys(review.characteristics || {}).forEach((name) => {
      if (!characteristicTotals[name]) {
        characteristicTotals[name] = { total: 0, count: 0 };
      }

      characteristicTotals[name].total += Number(review.characteristics[name]);
      characteristicTotals[name].count += 1;
    });
  });

  const characteristics = {};
  Object.keys(definition).forEach((name) => {
    const totals = characteristicTotals[name] || { total: 0, count: 0 };
    characteristics[name] = {
      id: definition[name],
      value: totals.count ? String((totals.total / totals.count).toFixed(2)) : '0',
    };
  });

  return {
    product_id: String(productId),
    ratings,
    recommended: {
      true: String(recommended.true),
      false: String(recommended.false),
    },
    characteristics,
  };
};

const sortReviews = (reviews, sort) => {
  const sorted = [...reviews];

  if (sort === 'newest') {
    sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
    return sorted;
  }

  if (sort === 'helpfulness') {
    sorted.sort((a, b) => b.helpfulness - a.helpfulness);
    return sorted;
  }

  sorted.sort((a, b) => {
    const scoreA = a.helpfulness + (a.rating * 0.5);
    const scoreB = b.helpfulness + (b.rating * 0.5);
    return scoreB - scoreA;
  });
  return sorted;
};

const response = (config, data, status = 200) => ({
  data,
  status,
  statusText: status >= 400 ? 'Error' : 'OK',
  headers: {},
  config,
  request: {},
});

const notFound = (config) => Promise.reject(response(config, { message: 'Demo route not found' }, 404));

const getUrlPath = (config) => {
  const pathname = new URL(config.url, DEMO_ORIGIN).pathname;
  return pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname;
};

const handleGet = (config, params) => {
  const path = getUrlPath(config);
  const productId = Number(params.product_id);

  if (path === '/product') {
    return response(config, clone(demoStore.products[productId]));
  }

  if (path === '/styles') {
    return response(config, clone(demoStore.stylesByProductId[productId] || []));
  }

  if (path === '/related') {
    return response(config, clone(demoStore.relatedByProductId[productId] || []));
  }

  if (path === '/questions') {
    const questions = getQuestionsForProduct(productId).filter((question) => !question.reported);
    return response(config, clone(questions));
  }

  if (path === '/reviews') {
    const count = Number(params.count) || 5;
    const sort = params.sort || 'relevance';
    const reviews = sortReviews(
      getReviewsForProduct(productId).filter((review) => !review.reported),
      sort
    ).slice(0, count);

    return response(config, {
      product: String(productId),
      page: 0,
      count,
      results: clone(reviews),
    });
  }

  if (path === '/reviewsMeta') {
    return response(config, buildMeta(productId));
  }

  return null;
};

const handlePost = (config, params, body) => {
  const path = getUrlPath(config);

  if (path === '/clickTrack') {
    demoStore.clickEvents.push({
      widget: params.widget,
      element: params.element,
      time: Date.now(),
    });
    return response(config, { tracked: true }, 201);
  }

  if (path === '/cart') {
    demoStore.cart.push({
      sku_id: params.sku_id,
      added_at: new Date().toISOString(),
    });
    return response(config, { added: true }, 201);
  }

  if (path === '/questions/add') {
    const question = {
      question_id: demoStore.nextQuestionId++,
      question_body: body.question,
      question_helpfulness: 0,
      reported: false,
      answers: {},
    };

    if (!demoStore.questionsByProductId[body.product_id]) {
      demoStore.questionsByProductId[body.product_id] = [];
    }

    demoStore.questionsByProductId[body.product_id].unshift(question);
    return response(config, question, 201);
  }

  if (path === '/answer/add') {
    const answer = {
      id: demoStore.nextAnswerId++,
      body: body.answer,
      date: new Date().toISOString(),
      answerer_name: body.nickname,
      helpfulness: 0,
      photos: body.photos || [],
      reported: false,
    };

    Object.values(demoStore.questionsByProductId).forEach((questions) => {
      questions.forEach((question) => {
        if (question.question_id === body.question_id) {
          question.answers[answer.id] = answer;
        }
      });
    });

    return response(config, answer, 201);
  }

  if (path === '/addReview') {
    const productId = Number(body.product_id);
    const reviewCharacteristics = {};

    Object.keys(body.characteristics || {}).forEach((characteristicId) => {
      const name = getCharacteristicNameById(productId, characteristicId);
      if (name) {
        reviewCharacteristics[name] = Number(body.characteristics[characteristicId]);
      }
    });

    const review = {
      review_id: demoStore.nextReviewId++,
      rating: Number(body.rating),
      summary: body.summary,
      recommend: Boolean(body.recommend),
      response: null,
      body: body.body,
      date: new Date().toISOString(),
      reviewer_name: body.name,
      helpfulness: 0,
      photos: (body.photos || []).map((url, index) => ({ id: `${Date.now()}-${index}`, url })),
      characteristics: reviewCharacteristics,
      reported: false,
    };

    if (!demoStore.reviewsByProductId[productId]) {
      demoStore.reviewsByProductId[productId] = [];
    }

    demoStore.reviewsByProductId[productId].unshift(review);
    return response(config, review, 202);
  }

  if (path === '/deleteImages') {
    return response(config, { cleared: true }, 202);
  }

  if (path === '/uploadReviewPic') {
    return response(config, buildImage(`uploaded-review-${Date.now()}`).url, 201);
  }

  return null;
};

const handlePut = (config, params, body) => {
  const path = getUrlPath(config);

  if (path === '/questions/helpful') {
    Object.values(demoStore.questionsByProductId).forEach((questions) => {
      questions.forEach((question) => {
        if (question.question_id === body.question_id) {
          question.question_helpfulness += 1;
        }
      });
    });
    return response(config, { updated: true }, 201);
  }

  if (path === '/answer/helpful') {
    Object.values(demoStore.questionsByProductId).forEach((questions) => {
      questions.forEach((question) => {
        if (question.answers[body.answer_id]) {
          question.answers[body.answer_id].helpfulness += 1;
        }
      });
    });
    return response(config, { updated: true }, 201);
  }

  if (path === '/answer/report') {
    Object.values(demoStore.questionsByProductId).forEach((questions) => {
      questions.forEach((question) => {
        if (question.answers[body.answer_id]) {
          question.answers[body.answer_id].reported = true;
        }
      });
    });
    return response(config, { updated: true }, 201);
  }

  if (path === '/reviewsHelpful') {
    const reviewId = Number(params.reviewID);
    Object.values(demoStore.reviewsByProductId).forEach((reviews) => {
      reviews.forEach((review) => {
        if (review.review_id === reviewId) {
          review.helpfulness += 1;
        }
      });
    });
    return response(config, { updated: true }, 200);
  }

  if (path === '/reviewsReport') {
    const reviewId = Number(params.reviewID);
    Object.values(demoStore.reviewsByProductId).forEach((reviews) => {
      reviews.forEach((review) => {
        if (review.review_id === reviewId) {
          review.reported = true;
        }
      });
    });
    return response(config, { updated: true }, 200);
  }

  return null;
};

export const installDemoApi = (axiosInstance) => {
  if (!isDemoMode) {
    return;
  }

  axiosInstance.defaults.adapter = async (config) => {
    const params = mergeParams(config);
    const body = parseData(config.data);
    const method = (config.method || 'get').toLowerCase();

    if (method === 'get') {
      const result = handleGet(config, params);
      if (result) {
        return result;
      }
    }

    if (method === 'post') {
      const result = handlePost(config, params, body);
      if (result) {
        return result;
      }
    }

    if (method === 'put') {
      const result = handlePut(config, params, body);
      if (result) {
        return result;
      }
    }

    return notFound(config);
  };
};
