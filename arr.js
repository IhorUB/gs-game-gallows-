function sameArr(first, second) {
  let a = first.length;
  let b = second.length;
  if (a != b) {
    console.log('arr have different length');
    exit;
  }
  for (let i = 0; i < a; i++) {
    if (first[i] != second[i]) {
      return console.log('false');
    }
  }
  return console.log('true');
}

sameArr([1,2,3],[1,2,2]);