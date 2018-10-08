/* Functionality for calculator buttons */

var display = "";
var answer = 0;

document.getElementById("zero").addEventListener("click",function(){updateScreen("0");});
document.getElementById("one").addEventListener("click",function() {updateScreen("1");});
document.getElementById("two").addEventListener("click",function() {updateScreen("2");});
document.getElementById("three").addEventListener("click",function() {updateScreen("3");});
document.getElementById("four").addEventListener("click",function() {updateScreen("4");});
document.getElementById("five").addEventListener("click",function() {updateScreen("5");});
document.getElementById("six").addEventListener("click",function() {updateScreen("6");});
document.getElementById("seven").addEventListener("click",function() {updateScreen("7");});
document.getElementById("eight").addEventListener("click",function() {updateScreen("8");});
document.getElementById("nine").addEventListener("click",function() {updateScreen("9");});
// number buttons

document.getElementById("divide").addEventListener("click",function() {updateScreen("/");});
document.getElementById("multiply").addEventListener("click",function() {updateScreen("*");});
document.getElementById("add").addEventListener("click",function() {updateScreen("+");});
document.getElementById("subtract").addEventListener("click",function() {updateScreen("-");});
// operator buttons/right-toolbar

document.getElementById("delete").addEventListener("click",function() {deleteDigit();});
document.getElementById("clear").addEventListener("click",function() {clear();});
// clr/delete buttons/upper-toolbar

document.getElementById("decimal").addEventListener("click",function() {updateScreen(".");});
// decimal buttons

document.getElementById("equals").addEventListener("click",function() {calculate(display = document.getElementById('display').value); showAnswer();})
// equals, calculates answer, displays it

function calculate(expression){
    /* If calculate() has no parm when called, case where = is used without expression disp 0.
     Else, evaluate function as normal*/
    if(display === ''){
       return;
    }
    else{ 
        answer =  eval(display);
    }
}

function clear(){
    display = '';
    answer = 0;
    updateScreen('');
}

function deleteDigit(){
    //deletes last character from an expression
    display = display.substring(0, (display.length -1));
    updateScreen('');
}

function showAnswer(){
    // display = answer, fixes math.eval() order of operations bug
    display = answer;
    document.getElementById('display').value = answer;
}
function updateScreen(input){
    /*if no input is passed, gets new, usually cleared or partially deleted input
    else, just tacks on input to back of expression*/
        if(input === ''){
            document.getElementById('display').value = display;
        }
        else{ 
            display += input;
            document.getElementById('display').value = display;
        } 
}



