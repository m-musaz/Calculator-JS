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

    uservar?eCheck=eCheck.replaceAll(String(uservar),String(varval)):undefined;

    console.log(eCheck);
    try
    {
        console.log(eval(eCheck));
    }
    catch(e)
    {
        alert(e);
    }

    let ans = parseFloat(eval(eCheck));

    ans = ans.toFixed(4);

    return String(ans);
}

export {evalFunc};