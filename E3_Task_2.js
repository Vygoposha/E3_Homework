function test100(number) {
  if (number < 0 || number > 1000){
      console.log('Данные не верны')
  } else if (number == 0 || number == 1) {
        console.log ('Введенное число не является ни простым ни составным')
  }

  let flag = true;
  for(let delitel = 2; delitel < number; delitel++){
    if (number % delitel == 0){
        flag = false;
      break;
    }
  }

  if (flag){
    console.log('Это простое число');
  }else {
    console.log('Это сложное число');
  }
}
