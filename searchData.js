const searchData = function (...data) {
  return function (searchWith) {
    return data.filter((ele) => ele.includes(searchWith))
  }
}

const fruits = searchData('Apple', 'banana', 'orange');

console.log(fruits('a'));
