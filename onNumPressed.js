import {evalFunc} from "./eval.js";

function onNumPressed(button_num)
{
    document.getElementById("inputbox").value+=button_num;
}

function onSignPressed(symbol)
{
    document.getElementById("inputbox").value+=symbol;
}

function onEqualPressed()
{
    let uservar = document.getElementById("uservar").value;
    if(uservar==="e" || uservar==="pi")
    {
        alert("Error Cannot use reserved variable name !!!");
        return;
    }

    let ans = evalFunc(document.getElementById("inputbox").value);
    document.getElementById("resultbox").textContent=ans;
}

function clear()
{
    let len = document.getElementById("inputbox").value.length;
    document.getElementById("inputbox").value = document.getElementById("inputbox").value.substring(0, len-1);
}
function clearAll()
{
    document.getElementById("inputbox").value ="";
    document.getElementById("resultbox").textContent="Result";
}

function addvar()
{
    let uservar = document.getElementById("uservar").value;
    if(uservar==="e" || uservar==="pi")
    {
        alert("Error Cannot use reserved variable name !!!");
        return;
    }
    document.getElementById("inputbox").value+=uservar;
}

export {onNumPressed,onSignPressed,onEqualPressed,clear,addvar,clearAll};