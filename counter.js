const counter = function () {
  let x = 1;

  return function () {
    return x++;
  }
}