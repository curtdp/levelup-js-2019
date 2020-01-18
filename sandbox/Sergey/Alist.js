let newAr = ['Alex', 'Bob', 'Curt', 'David', 'Etan'];
function arrayToList(arr) {
  let l = { value: arr[arr.length - 1], rest: null };
  for (i = arr.length - 2; i >= 0; i--) {
    l = { value: arr[i], rest: l };
  }
  return l;
}
console.log(arrayToList(newAr)); //?

function nth(list, n) {
  for (i = n; i > 0; i--) {
    list = list[Object.keys(list)[1]];
    if (list == null && i > 0) {
      return undefined;
    } else if (list == null) {
      return list[Object.keys(list)[0]];
    }
  }
  return list[Object.keys(list)[0]];
}

console.log(nth(arrayToList([10, 20, 30]), 1));

console.log(nth(arrayToList(newAr), 1));

function prepend(e, list) {
  let newList = { value: e, rest: list };
  return newList;
}
console.log(prepend('Adam', arrayToList(newAr)));
function listToArray(list) {
  let arr = [];
  while (list != null) {
    arr.push(list[Object.keys(list)[0]]);
    list = list[Object.keys(list)[1]];
  }
  return arr;
}

console.log(arrayToList(newAr));
console.log(listToArray(arrayToList(newAr)));
