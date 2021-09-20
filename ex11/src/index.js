function mathTest(x, y) {
  if (x < 0 || y < 0) {
    return undefined;
  }

  return Math.round(Math.pow(Math.sqrt(x) + Math.sqrt(y), 2));
}

mathTest(3, 3);

module.exports = mathTest;
