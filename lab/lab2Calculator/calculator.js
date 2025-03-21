// Functions

const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;

}

function clearDisplay() { 
    display.value = '';
}

function delateLastCharacter() {
    display.value = display.value.toString().slice(0,-1)
}

function calculate() {
    display.value = eval(display.value);
}


/// Separating the values and the operator
let value1 ;
let value2 ;
let operator = '';
let result ;

const operations = {
    sum : "+",
    sub : "-",
    mul : "*",
    div : "/",
}

function calculateSwitch() {
    if (display.value.includes(operations.sum || operations.sub || operations.mul || operations.div)) {
        let value1 = display.value.split(operator)[0];
        let value2 = display.value.split(operator)[1];
        operator = display.value.split(value1)[1];

    switch (operator) {
        case operations.sum:
            result = parseInt(value1) + parseInt(value2);
            break;
        case operations.sub:
            result = parseInt(value1) - parseInt(value2);
            break;
        case operations.mul:
            result = parseInt(value1) * parseInt(value2);
            break;
        case operations.div:
            result = parseInt(value1) / parseInt(value2);
            break;
    }
    display.value = result;
    }
}






