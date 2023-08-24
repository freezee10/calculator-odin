// variables

let num1 = '';
let num2 = '';
let expression = "";
let operationIndex;
let answer = 0;
let operationUsed = false;
let displaying = '';




function calculation() {

let operation = getOperator();
num1 = Number(expression.slice(0, operationIndex));
num2 = Number(expression.slice(operationIndex+1, expression.length-1));
let lastOperation = expression[expression.length-1];

answer = operator(operation,num1, num2);

answer = answer.toString();


if(answer === 'Infinity') {
    document.querySelector('.display-screen').innerHTML = "DONT DO THAT";
    return;
}
if(lastOperation === '=') {
    operationUsed = false;
    expression = answer;
    
    document.querySelector('.display-screen').innerHTML = expression;
} else {
    expression = `${answer}${lastOperation}`;
    document.querySelector('.display-screen').innerHTML = expression;
}


}


document.querySelectorAll('.button').forEach((button) => {

    button.addEventListener('click', () => {
        expression += button.dataset.button;
      
      document.querySelector('.display-screen').innerHTML = expression;
        if(operationUsed === true) {
            if(button.dataset.button === '+' || button.dataset.button === '-' || button.dataset.button === 'x' || button.dataset.button === '/' || button.dataset.button === '=') {
                
                calculation();
            }
           }
     
       if(button.dataset.button === '+' || button.dataset.button === '-' || button.dataset.button === 'x' || button.dataset.button === '/') {
        operationUsed = true;
       }

    
    })

})

document.addEventListener('keydown', function(event) {
  
  if(event.key === '1' || event.key === '2' || event.key === '3'|| event.key === '4' || event.key === '5' || event.key === '6' || event.key === '7' || event.key === '8' || event.key === '9' || event.key === '0' || event.key === '.' || event.key === '=' || event.key === '+' || event.key === '-' || event.key === 'x' || event.key === '/') {
    expression += event.key;
    document.querySelector('.display-screen').innerHTML = expression;
  }
 
  if(operationUsed === true) {
    if(event.key === '+' || event.key  === '-' || event.key === 'x' || event.key === '/' || event.key === '=') {
        
        calculation();
    } else if(event.key === 'Enter') {
        expression += '=';
        calculation();
    }
   }

if(event.key === '+' || event.key === '-' || event.key === 'x' || event.key === '/') {
operationUsed = true;
}
});



function getOperator() {
    let operation;
    for(let i = 0; i < expression.length; i++) {
        if(expression[i] === '+' || expression[i] === '-' || expression[i] === 'x' || expression[i] === '/') {
            operationIndex = i;
            operation = expression[i];
            break;
        }
    }

    switch(operation) {
        case '+':
            return '+';
        case '-':
            return '-';
        case 'x':
            return 'x';
        case '/':
            return '/';
    }
}

function operator(operation, num1, num2) {
    switch(operation) {
        case '+':
            return add(num1,num2);
        case '-':
            return subtract(num1, num2);
        case 'x':
            return multiply(num1, num2);
        case '/':
            return divide(num1,num2);
    }
}

function add(n1, n2) {
    return n1 + n2;
}

function subtract(n1, n2) {
    return n1-n2;
}

function multiply(n1,n2) {
    return n1*n2;
}

function divide(n1,n2) {
    return n1/n2;
}

document.querySelectorAll('.operation').forEach((operation) => {
    operation.addEventListener('click', () => {
        document.querySelector('.add').classList.remove('clicked');
        document.querySelector('.sub').classList.remove('clicked');
        document.querySelector('.mult').classList.remove('clicked');
        document.querySelector('.div').classList.remove('clicked');
        operation.classList.add('clicked');
    })
})

document.querySelector('.clear').addEventListener('click', () => {
    expression = '';
    document.querySelector('.display-screen').innerHTML = expression;
})


document.querySelector('.delete').addEventListener('click', () => {
    expression = expression.slice(0,-1);
    document.querySelector('.display-screen').innerHTML = expression;
})
