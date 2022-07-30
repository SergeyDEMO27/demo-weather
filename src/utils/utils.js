export const getDaysData = (startIndex, data) => {
  const result = Object.keys(data).reduce((acc, key) => {
    for (let i = startIndex * 24; i < startIndex * 24 + 24; i += 1) {
      acc[key] = acc.hasOwnProperty(key)
        ? [...acc[key], data[key][i]]
        : [data[key][i]];
    }
    return acc;
  }, {});

  console.log(result);
  return result;
};
