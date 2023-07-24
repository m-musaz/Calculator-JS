function evalFunc(textString)
{
    let uservar = document.getElementById("uservar").value;
    let varval = document.getElementById("uservarval").value;

    let expCheck = textString.replaceAll('^',"**");
    let sqrtCheck = expCheck.replaceAll("sqrt","Math.sqrt");
    let sinCheck = sqrtCheck.replaceAll("sin","Math.sin");
    let cosCheck = sinCheck.replaceAll("cos","Math.cos");
    let tanCheck = cosCheck.replaceAll("tan","Math.tan");
    let piCheck = tanCheck.replaceAll("pi","Math.PI");
    let eCheck = piCheck.replaceAll("e","Math.E");




    console.log(eCheck);
    console.log(eval(eCheck));

    return eval(eCheck);
}

export {evalFunc};