const generateFilters = () => {
  const getRandomCount = () => {
    return Math.floor(Math.random() * 10);
  };
  return [{
    name: `All movies`,
  },
  {
    name: `Watchlist`,
    count: getRandomCount()
  }, {
    name: `History`,
    count: getRandomCount()
  }, {
    name: `Favorites`,
    count: getRandomCount()
  }];
};

export {generateFilters};
