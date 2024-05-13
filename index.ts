#! usr/bin/env node
import inqurer from "inquirer";

const answer = await inqurer.prompt([
  { message: "enter first number", type: "number", name: "firstnumber" },
  { message: "enter second number", type: "number", name: "secondnumber" },
  {
    message: "select one of the operators to perform  operation",
    type: "list",
    name: "operator",
    choices: ["addition", "subtraction", "multiplication", "division"],
  },
]);

// conditional ststment
if(answer.operator === "addition") {
    console.log( answer.firstnumber + answer.secondnumber)
} else if (answer.operator === "subtraction") {
    console.log( answer.firstnumber - answer.secondnumber)
} else if(answer.operator === "multiplication") {
    console.log( answer.firstnumber * answer.secondnumber)
}
else if(answer.operator === "division") {
    console.log( answer.firstnumber / answer.secondnumber)
} else {
    console.log("pleace select valid operator")
}