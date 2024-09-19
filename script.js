let firstNumber = null;
let secondNumber = null;
let operator = null;
let displayValue = "0";



function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b){
    return a / b ;
}



function operate(operator, firstNum, secondNum){

    if(operator === "+"){
        return add(firstNum, secondNum)
    } else if(operator === "-") {
        return subtract(firstNum, secondNum)
    } else if(operator === "*"){
        return multiply(firstNum, secondNum)

    } else if(operator === "/"){ 
        return divide(firstNum, secondNum)
    }

}


function updateDisplay() {
    const display = document.querySelector(".display-content");
    display.textContent = displayValue;
}



const buttons = document.querySelectorAll("button")
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.innerText;
        console.log(value)

        if(!isNaN(value)){
            showInput(value)
        } else if(value === "="){
            Calculate()
        } else if (value === "C"){
            Reset()
        } else {
            Operation(value)
        }

        updateDisplay()
    })
})



function showInput(value){
    if(displayValue === "0"){
        displayValue = value;
    } else {
        displayValue += value
    }
}

function Calculate(){

    console.log(firstNumber)
    console.log(secondNumber)
    if(firstNumber !== null && operator !== null) {
        secondNumber = parseFloat(displayValue);
        let result = operate(operator, firstNumber, secondNumber)
        displayValue =  result
        firstNumber = result;
        operator = null;
    }
    
}

function Reset(){
    displayValue= "0";
    firstNumber = null;
    secondNumber = null;
    operator = null;

}

function Operation(value){
    if(firstNumber !== null && operator !== null){
        secondNumber = parseFloat(displayValue);;
        let result = operate(operator, firstNumber, secondNumber)
        displayValue =  result
        firstNumber = result;
    } else {
        firstNumber = parseFloat(displayValue);

    }

    operator = value;
    displayValue = "0"


}


