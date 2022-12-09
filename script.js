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

    compute(operation){
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case '*':
                computation = prev * current
                break
            case '÷':
                computation = prev / current
                break
            default:
                return
        }
        currentOperand = computation
        operation = undefined;
    }

    chooseOperation(operation) {
        if (currentOperand === '') return
        if (previousOperand !== ''){
            this.compute(operation);
        }
        chosenOperator = operation;
        previousOperand = currentOperand;
        currentOperand = '';
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
        calculator.chooseOperation(button.innerHTML);
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