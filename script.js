const power = document.getElementById("btn-on-off");
let powerOn = false;    // toggle true/false for every click event on the power

    // deletion keys
        let reset = "";
        let clear = "";
    //brackets
        let openBrac = "";
        let closeBrac = "";
    // number keys
        let num1 = "";
        let num2 = "";
        let num3 = "";
        let num4 = "";
        let num5 = "";
        let num6 = "";
        let num7 = "";
        let num8 = "";
        let num9 = "";
        let num0 = "";
    //special operators
        let deciDot = "";
        let signToggle = "";
        let sqRoot = "";
        let deleteChar = "";
    // operators
        let divide = "";
        let subtract = "";
        let multiply = "";
        let add = "";
        let percent ="";

function keyFunctions (enable)  {//enable is meant to recieve an argument of boolean type only
    if(!enable) {
         // deletion keys
        reset = "";
        clear = "";
    //brackets
        openBrac = "";
        closeBrac = "";
    // number keys
        num1 = "";
        num2 = "";
        num3 = "";
        num4 = "";
        num5 = "";
        num6 = "";
        num7 = "";
        num8 = "";
        num9 = "";
        num0 = "";
    //special operators
        deciDot = "";
        signToggle = "";
        sqRoot = "";
        deleteChar = "";
    // operators
        divide = "";
        subtract = "";
        multiply = "";
        add = "";
        percent ="";
    }
    else {
    // deletion keys
        reset = document.getElementById("btn-AC");
        clear = document.getElementById("btn-clr");
    //brackets
        openBrac = document.getElementById("btn-open-bracket");
        closeBrac = document.getElementById("btn-close-bracket");
    // number keys
        num1 = document.getElementById("btn-1");
        num2 = document.getElementById("btn-2");
        num3 = document.getElementById("btn-3");
        num4 = document.getElementById("btn-4");
        num5 = document.getElementById("btn-5");
        num6 = document.getElementById("btn-6");
        num7 = document.getElementById("btn-7");
        num8 = document.getElementById("btn-8");
        num9 = document.getElementById("btn-9");
        num0 = document.getElementById("btn-0");
    //special operators
        deciDot = document.getElementById("btn-decimal-point");
        signToggle = document.getElementById("btn-sign-toggle");
        sqRoot = document.getElementById("btn-Sqrt");
        deleteChar = document.getElementById("btn-1/x");
    // operators
        divide = document.getElementById("btn-divide");
        subtract = document.getElementById("btn-subtract");
        multiply = document.getElementById("btn-multiply");
        add = document.getElementById("btn-add");
        percent = document.getElementById("btn-percentage");
    }
}
    
// display unit
    let mainScreen = document.getElementById("primary-display");
    let subScreen = document.getElementById("secondary-display");

power.addEventListener('click',() => {
    if(powerOn) {
        powerOn = false;
        power.classList.remove("bg-green-800");
        power.classList.remove("text-slate-300");
        power.classList.add("text-yellow-600");
        allClear();
        keyLights(powerOn);
        keysFunctions(powerOn);
    }
    else {
        powerOn = true;
        power.classList.add("bg-green-800");
        power.classList.remove("text-yellow-600"); // removing existing style in order to replace 
        power.classList.add("text-slate-300");
        welcomeText();
        keyLights();
        keysFunctions(powerOn);
    }
});