// document.addEventListener("DOMContentLoaded", function() {
//     let displayElement = document.getElementById("display");
//     let  buttons = document.querySelectorAll(".bouton button");
//     let clearButton = document.querySelector(".clear");
//     var currentInput='';
//     function upDate(){
//        currentInput = displayElement.value;
//     }
//     function operation(operator){
//         if (currentInput === '')
//             return;
//         currentInput+=operator;
//         upDate();
//     }
//     function numbers(firstOperant){
//     currentInput+=firstOperant;
//     upDate();
//     }
//     function calculate() {
//         currentInput= eval(currentInput).toString()
//         upDate();
//     }
    
//     function clear(){
//         currentInput='';
//         upDate();

//     }
    
//     buttons.forEach(button =>{
//         button.addEventListener('click',()=>{
//             const value=buttons.getAttribute('data-value');
//             if (value ==='='){
//             calculate();
//             }
//             else if (['+','-','/','*'].includes(value)){
//                 operation(value);
//             } 
//             else {
//                 numbers(value);
//             }

//         })
//     })

  
// clearButton.addEventListener('click',clear);
// upDate();      
// });

document.addEventListener("DOMContentLoaded", function() {
    let displayElement = document.getElementById("display");
    let buttons = document.querySelectorAll(".bouton button");
    let clearButton = document.querySelector(".clear");
    let currentInput = '';


    function updateDisplay() {
        displayElement.value = currentInput;
    }


    function operation(operator) {
        if (currentInput === '') return;
        currentInput += operator;
        updateDisplay();
    }


    function numbers(number) {
        currentInput += number;
        updateDisplay();
    }

    function calculate() {
        try {
            currentInput = eval(currentInput).toString();
        } catch {
            currentInput = 'Error';
        }
        updateDisplay();
    }


    function clear() {
        currentInput = '';
        updateDisplay();
    }


    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');
            if (value === '=') {
                calculate();
            } else if (['+', '-', '/', '*'].includes(value)) {
                operation(value);
            } else {
                numbers(value);
            }
        });
    });

    // Event listener for the clear button
    clearButton.addEventListener('click', clear);


    updateDisplay();
});