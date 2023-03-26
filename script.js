let num1 = prompt('Введите первое число')
let num2 = prompt('Введите второе число')
let operator = prompt('Выберите оператор +,-,*,/')

if(operator == '+'){
   result = num1 + num2
}else if(operator == '-'){
     result = num1 - num2
}else if(operator == '*'){
     result = num1 * num2
}else if(operator == '/'){
     result = num1 / num2
}else{
    alert('Ошибка')
}

alert("Результат: " + result);