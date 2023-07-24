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
    let ans = evalFunc(document.getElementById("inputbox").value);
    document.getElementById("resultbox").textContent=ans;
}

function clear()
{
    document.getElementById("inputbox").value="";
}

export {onNumPressed,onSignPressed,onEqualPressed,clear};