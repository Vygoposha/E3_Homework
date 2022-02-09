const fiveto = function (a,b) {
  for (let i = a; i <= b; i++) {
    setTimeout(() => console.log(i), 1000 * (i + 1));
  }
}
fiveto(5,15)
