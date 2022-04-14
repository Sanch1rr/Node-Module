function add2ToArray(a, b, c) {
  let array = [a, b, c];
  let array2 = array.map((e) => {
    return e + 2;
  });
  return array2;
}
console.log(add2ToArray(1, 2, 3));
