const textbox = document.getElementById("textbox");
const toF = document.getElementById("toF")
const toC = document.getElementById("toC")
const result = document.getElementById("result")
let t;

function convert(){

    if(toF.checked){
        result.textContent = "You selected to Fahrenheit"
        t = Number(textbox.value);
        t = t*9/5+32;
        result.textContent = t.toFixed(1)+"°F"
    }
    else if(toC.checked){
        result.textContent = "You selected to Celsius"
        t = Number(textbox.value);
        t = (t-32)*(5/9);
        result.textContent = t.toFixed(1)+"°C"
    }

    else{
        result.textContent = "Select a unit";
    }
}

//Differant themes code

const themebtn = document.getElementById("themebtn")

const themes = ["", "dark", "ocean", "forest","sunset" ,"midnight", "crimson" ];
const themenm = ["Light","Dark", "Ocean", "Forest","Sunset", "Midnight", "Crimson", "Light"];
let current = 0;



themebtn.onclick = function(){
    current++;

    current = current >= themes.length ? 0 : current;

    document.body.className = themes[current];
    themebtn.textContent = themenm[current+1];
}


