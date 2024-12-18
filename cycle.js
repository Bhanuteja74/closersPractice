const cycle = function (list) {
  let index = -1;

  return function (char) {
    index++;

    if (index === list.length) {
      index = 0;
    }

    return list[index] + ' ' + char;
  }
}

const animals = ['dog', 'cat', 'cow', 'parrot'];

[1, 2, 3].map(cycle(animals));