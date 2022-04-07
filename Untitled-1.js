/**
 * 
 * @param {*} operation 
 * @param {*} num1 
 * @param {*} num2 
 * @returns 
 */
function mathOperation(operation, num1, num2) {

    switch (operation) {
        case '+':
            return sum(num1, num2);

        case '-':
            return difference(num1, num2);

        case '*':
            return multiplication(num1, num2);
        case '/':
            return division(num1, num2);

    }
    return NaN;
}