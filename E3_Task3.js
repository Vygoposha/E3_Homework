function sumarg(num1){

  return function (num2){
    console.log(num1 + num2);
  };
}
const resfunc = sumarg(10);
resfunc(7)
