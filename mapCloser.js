const map = function (func) {
  return function (list) {
    const mapperList = [];

    for (const ele of list) {
      mapperList.push(func(ele));
    }

    return mapperList;
  }
}

const sqr = (x) => x * x;
const halfer = (x) => x / 2;