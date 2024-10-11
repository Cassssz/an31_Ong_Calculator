function calculate() {
    const input1 = document.getElementById('input1').value;
    const operator = document.getElementById('operator').value;
    const input2 = document.getElementById('input2').value;
    
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = "Invalid Input! Please Enter Valid Numbers.";
    } else {
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if (num2 === 0) {
                    result = "Error: Division by Zero is NOT Allowed!";
                } else {
                    result = num1 / num2;
                }
                break;
            default:
                result = "Invalid Operation! Please use +, -, *, or /.";
        }
    }
    
    document.getElementById('result').textContent = result;
}