window.onload = () => {     // Activates after the window's loading is done

    document.querySelector('#price').value = 1.72;          // Set the default value of price to 1.72

    
    const calculateButton = document.querySelector('#calculateButton');         // Use element id 'CalculateButton'

    
    calculateButton.addEventListener('click', calculate);                       // Used to activate 'click' event listener button

    
    document.querySelector('#totalAmount').innerText = "0";                     // Set the default value of total amount to 0
}


function calculate() {                                                          // To calculate the sum based on price and litres value
    
    const price = parseFloat(document.querySelector('#price').value);           // To analyze the value of price and convert it to a float
    
    
    const litres = parseFloat(document.querySelector('#litres').value);         // To analyze the value of liters and convert it to a float
    
    
                                                                                // To check if the input value is not a number and exit the function without calculating
    if (isNaN(price) || isNaN(litres)) return;                              
    
    
    const totalAmount = price * litres;                                         // To calculate the total amount of product
    
                                                                                // Total amount is used to show the total calculated amount of price and liters
    document.querySelector('#totalAmount').innerText = totalAmount.toFixed(2);   // ToFixed is used to show 2 decimal places
}