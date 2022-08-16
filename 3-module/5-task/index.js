function getMinMax(str) {
  const garbage = Array.from(str.matchAll(/(\-?[\d]*[.]?[\d]+)/g));
  const chaosArr = garbage.map((itm) => {
    return parseFloat(itm[1], 10);
  });
  const ready = chaosArr.sort(function (a, b) {
    return a - b;
  });
  return {
    min: ready[0],
    max: ready[ready.length - 1],
  };
}
