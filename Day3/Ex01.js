function max(a, b, c) {
  if (a < b && b < c) {
    return c;
  } else if (a < b && b > c) {
    return b;
  } else {
    return a;
  }
}
console.log(max(4, 5, 3));
console.log(max(4, 5, 4));
console.log(max(4, 4, 4));
console.log(max(-1, -2, -3));
