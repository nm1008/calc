const buttons = document.querySelectorAll("button");
const reset = document.querySelector(".ac")
const removeNum = document.querySelector(".delete")
const operatorBtn = document.getElementsByClassName("[operator]")

let currentNum = ""
let previousNum = ""
let operator = null;


function printScreen(value){
    const screen = document.querySelector(".screen");
    if (value.length <= 11 ){
        if (value === "0") {
            screen.innerHTML = "0"
        } else {
            screen.innerHTML = value;
        }        
    }
}

buttons.forEach((num) => {
    num.addEventListener("click", (e) => {
        
        if (e.target.value === "." && currentNum.includes(".")){
            return;
        }
            currentNum += e.target.value
            printScreen(currentNum)
    })
})




function resetScreen(){
    const screen = document.querySelector(".screen");
    screen.innerHTML = "0";
    currentNum = ""
}
reset.addEventListener("click", resetScreen)


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