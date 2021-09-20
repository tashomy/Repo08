function isLess(a, b) {
  if (a < b) {
    return true;
  } else {
    return false;
  }
}

console.log(isLess(2, 3));
console.log(isLess(7, 3));

module.exports = isLess;
