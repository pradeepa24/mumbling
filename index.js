function accum(s) {
	// your code
  let sArray = [...s];
  let resArray = [];
  let res;
  for(let i=0;i<sArray.length;i++) {
  res = sArray[i].toUpperCase();
    for(let j=0; j<i;j++) {
    res += sArray[i].toLowerCase();
    }
    resArray.push(res);
}
  return resArray.join('-');
}

console.log(accum("RqaEzty"));