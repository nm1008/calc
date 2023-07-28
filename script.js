const buttons = document.querySelectorAll("button");
const reset = document.querySelector(".ac")
const removeNum = document.querySelector(".delete")
const operatorBtn = document.getElementsByClassName("[operator]")

let currentNum = ""
let previousNum = ""
let operator = null;

//prints the value that was pressed on the screen 
function printScreen(value){
    const screen = document.querySelector(".screen");

    //if statement that allows 11 digits on the screen
    if (value.length <= 11 ){
        //if statement that prevents to print multiple zeros if the initial value is zero
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
        currentNum += e.target.value
        printScreen(currentNum)
    })
})


//a function that resets the screen and currentNum
function resetScreen(){
    const screen = document.querySelector(".screen");
    screen.innerHTML = "0";
    currentNum = ""
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



function operate(){

}