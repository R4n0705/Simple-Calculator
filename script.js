// Initialize variables
let firstnumber = '';
let operator = '';
let display = document.getElementById('display');


// Clear functionality
document.getElementById('clear').addEventListener('click', function(){
    display.value = '';

});

// Backspace functionality
document.getElementById('backspace').addEventListener('click', function(){
    let currentValue = display.value;

    if(display.value !== '' && display.value !== 'Error'){
        display.value = currentValue.slice(0, -1);
    }
    
});



// Handle number buttons
document.querySelectorAll('.btn').forEach(function(button){

    button.addEventListener('click', function() {
        display.value += button.innerText;
    });

});

// Handle operator buttons
document.querySelectorAll('.btn_operator').forEach(function(button){

   button.addEventListener('click', function(){

        firstnumber = display.value;
        operator =button.innerText;
        display.value = '';

   });

});

// Handle equal button
document.getElementById('equals').addEventListener('click', function(){
    // Handle divide by zero error
    if (display.value == 'Divide by 0 Error'){
        display.value = '';
        firstnumber = '';
        operator = '';
        return;

    }
    // Prevent calculation if no input
    if (display.value == '' && firstnumber == '')return;
    // Perform calculation
    try{
        let secondNumber = display.value || firstnumber;
        let result;
        if(operator == '+') result = parseFloat(firstnumber) + parseFloat(secondNumber);
        else if(operator == '-') result = parseFloat(firstnumber) - parseFloat(secondNumber);
        else if(operator == '*') result = parseFloat(firstnumber) * parseFloat(secondNumber);
        else if(operator == '/'){
            if(parseFloat(secondNumber) == 0 ){
                display.value = 'Divide by 0 Error';
                firstnumber = '';
                operator = '';
                return;

            }
            result = parseFloat(firstnumber) / parseFloat(secondNumber);

        }
        else result = parseFloat(display.value);


        display.value =result;
        firstnumber = '';
        operator = '';

    }

    // Handle any errors during calculation
    catch{
        display.value = 'Error';
    }
});

// Handle percent button
document.getElementById('percent').addEventListener('click', function(){

    if(display.value !== '' && display.value !== 'Error'){
        display.value = (parseFloat(display.value) / 100).toString();
        firstnumber = '';
        operator = '';
    }
    
});

