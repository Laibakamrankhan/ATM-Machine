#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 2905;
let pinAnswer = await inquirer.prompt([
    {
        name: "Pin",
        message: "Enter Your 4 Digit Pin",
        type: "number"
    }
]);
if (pinAnswer.Pin === myPin) {
    console.log("Correct Pin Code");
    let operationAns = await inquirer.prompt([
        {
            name: "Operation",
            message: "Please Select Option",
            type: "list",
            choices: ["Withdraw", "Fast Cash", "Check Balance"]
        }
    ]);
    if (operationAns.Operation === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "Amount",
                message: "Enter Your Amount",
                type: "number"
            }
        ]);
        if (amountAns.Amount > myBalance) {
            console.log("Insufficient Balance");
        }
        else {
            myBalance -= amountAns.Amount;
            console.log(`Your Remaning Balance is ${myBalance}`);
        }
    }
    else if (operationAns.Operation === "Fast Cash") {
        let fast = await inquirer.prompt([
            {
                name: "FastCash",
                message: "Select The Amount To Withdraw",
                type: "list",
                choices: [500, 1000, 2000, 5000, 10000]
            }
        ]);
        myBalance -= fast.FastCash;
        console.log(`You Have Sucessfully Withdraw ${fast.FastCash} \n Your Remaning Balance is ${myBalance}`);
    }
    else if (operationAns.Operation === "Check Balance") {
        console.log("Your Remainig Balance is " + myBalance);
    }
    ;
}
else {
    console.log("Incorrect Pin Code");
}
