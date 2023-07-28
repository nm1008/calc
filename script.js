const buttons = document.querySelectorAll(".number-button");
const equal = document.querySelector(".equal")
const operatorBtn = document.querySelectorAll(".operator")
const reset = document.querySelector(".ac")
const removeNum = document.querySelector(".delete")


let currentNum = ""
let previousNum = ""
let operator = null;

//prints the value that was pressed on the screen 
function printScreen(value){
    const screen = document.querySelector(".screen");

    //if statement that allows 11 digits on the screen
    if (value.length <= 11 ){
        //if statement that prevents to print multiple zeros if the initial value isbutton zero
        if (value === "0") {
            screen.innerHTML = "0"
        } else {
            screen.innerHTML = value;
        }        
    }
}

//button pressed on the screen 
buttons.forEach((num) => {
    num.addEventListener("click", (e) => {
        
        //if statement for decimal and if decimal is already included on currentNum it will just return the currentNum value
        if (e.target.value === "." && currentNum.includes(".")){
            return currentNum
        }

        console.log(e.target.value)

        //if an operator has been pressed the second number will be stored to currentNum, else if no operator is pressed it will just print the pressed button
        if(currentNum === null){
            currentNum += e.target.value
            printScreen(currentNum)
        } else {
            currentNum += e.target.value
            printScreen(currentNum)
        }
    })
})

//a function that resets the screen and currentNum
function resetScreen(){
    const screen = document.querySelector(".screen");
    screen.innerHTML = "0";
    currentNum = "";
    previousNum = "";
    operator = null;
}
reset.addEventListener("click", resetScreen)

//a function that deletes that last index of the number on the screen
function deleteNum(){
    currentNum = currentNum.slice(0, -1);
        if(currentNum === ""){
            printScreen("0")
        }else{
            printScreen(currentNum)
         }
    }
removeNum.addEventListener("click", deleteNum)

operatorBtn.forEach((button) => {
    button.addEventListener("click", (e) => {

        if(currentNum !== "" && previousNum === "") {
            previousNum = currentNum;
            currentNum = "";
            operator = e.target.value;   
        }
    }) 
})

function operate(){

   let num1 = parseFloat(previousNum);
   let num2 = parseFloat(currentNum);

    // switch(operator) {
    //     case "+":
    //         currentNum = (num1 + num2).toString();
    //         break;
    //     case "-":
    //         currentNum = (num1 - num2).toString();
    //         break;
    //     case "*":
    //         currentNum = (num1 * num2).toString();
    //         break;
    //     case "/":
    //         currentNum = (num1 - num2).toString();
    //         break
    //     default:
    //         break;
    // }

    if(operator === "+"){
        currentNum = (num1 + num2).toString();
    } else if(operator === "-"){
        currentNum = (num1 - num2).toString();
    }else if(operator === "*"){
        currentNum = (num1 * num2).toString();
    }else if (operator === "/") {
        if(num2 === 0){
            currentNum = "Error, cannot divide by 0"
        } else {
            currentNum = (num1 / num2).toString()
        }
    }

  
}

equal.addEventListener("click", () => {
    if(currentNum !== "" && previousNum === "" & operator === null){
        printScreen(currentNum)
    }else if(currentNum !== "" && previousNum !== "" && operator !== null){
        operate()
        printScreen(currentNum)
    }
})