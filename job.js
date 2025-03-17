const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculate(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return b !== 0 ? a / b : "Error: Division by zero is not allowed";
        default:
            return "Invalid operator. Use +, -, *, or /";
    }
}

function startCalculator() {
    rl.question("Enter first number: ", (num1) => {
        rl.question("Enter second number: ", (num2) => {
            rl.question("Enter operation (+, -, *, /): ", (operator) => {
                
                const a = parseFloat(num1);
                const b = parseFloat(num2);
                
                if (isNaN(a) || isNaN(b)) {
                    console.log("Error: Invalid input. Please enter numeric values.");
                } else {
                    console.log(`Result: ${calculate(a, b, operator)}`);
                }
                
                rl.question("Do you want to perform another calculation? (yes/no): ", (answer) => {
                    if (answer.toLowerCase() === 'yes') {
                        startCalculator();
                    } else {
                        console.log("Goodbye!");
                        rl.close();
                    }
                });
            });
        });
    });
}

startCalculator();
