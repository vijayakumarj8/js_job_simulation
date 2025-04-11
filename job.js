const readline=require('readline');

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function getInput()
{
    rl.question("Enter two values seperated by a space:",(values)=>
    {
        var [num1,num2]=values.split(' ').map(Number);

        if(isNaN(num1)||isNaN(num2))
        {
            console.log("Invalid input....Please enter valid numbers");
            getInput();
            return;
        }

        rl.question("Enter operation(+,-,*,/):",(op)=>
        {
            var result;
            switch(op)
            {
                case '+':
                    result=num1+num2;
                    break;
                case '-':
                    result=num1-num2;
                    break;
                case '*':
                    result=num1*num2;
                    break;
                case '/':
                    if(num2===0)
                    {
                        console.log("Division by zero is not allowed");
                        getInput();
                        return;
                    }
                    result=num1/num2;
                    break;
                default:
                    console.log("Invalid operation.Please enter any one of +,-,*,/");
                    getInput();
                    return;
            }

            console.log(`Result:${result}`);
            getInput();
        });
    });
}

getInput();