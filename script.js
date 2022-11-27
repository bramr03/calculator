function addition(a, b){
    c = a + b;
    return c;
}


function substraction(a, b){
    c = a - b;
    return c;
}

function multiply(a, b){
    c = a * b;
    return c;
}

function divide(a, b){
    c = a / b;
    return c;
}
const numbers = document.querySelectorAll('.numbers button');
numbers.forEach((number) => {
    number.addEventListener('click', () => {
        console.log(number.id);
    });
  });