class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
    }

    allClear(){
        currentOperand = '';
        previousOperand = '';

    }

    delete(){
        currentOperand = currentOperand.slice(0, -1);
    }

    compute(operand){
        if (previousOperand === '') return
        let previousNum = parseFloat(previousOperand);
        let currentNum = parseFloat(currentOperand);
        let operandString = String(operand);
        switch(operandString){
            case '+':
                previousOperand = String(previousNum + currentNum);
            case '-':
                previousOperand = String(previousNum + currentNum);
        }
    }



    updateDisplay(){
        currentOperandTextElement.innerHTML = currentOperand;
        previousOperandTextElement.innerHTML = previousOperand + " " + chosenOperator;
    }

    appendNumber(number) {
        let numberString = String(number);
        if(currentOperand.includes('.') === true & numberString === '.') return
        currentOperand = currentOperand.concat(numberString);
    }
}

let currentOperand = '';
let previousOperand = '';
let chosenOperator = '';
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

let calculator = new Calculator();

numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerHTML);
        calculator.updateDisplay();
    })
});

operationButtons.forEach((button) => {
    button.addEventListener('click', () => {
        calculator.compute(button.innerHTML);
        chosenOperator = button.innerHTML;
        previousOperand = currentOperand;
        currentOperand = '';
        calculator.updateDisplay();
    })
});

allClearButton.addEventListener('click', () => {
    calculator.allClear();
    calculator.updateDisplay();
})

deleteButton.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
})