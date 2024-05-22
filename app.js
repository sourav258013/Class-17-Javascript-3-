//Multification Table
/*

function multificationTable(c){
    let a;
    for(a=1; a<=10; a++){
        let result = c * a;
        console.log(`${c} * ${a} = ` + result);
    }
}

multificationTable(10)

console.log('/n');

let a;
for(a=1; a<=10; a++){
    let result = 2 * a;
    console.log(`2 * ${a} = ` + result);
}
*/

//Increment, Decrement Project

let rslt = document.querySelector(".result");
let dec = document.querySelector(".dec");
let inc = document.querySelector(".inc");


let a = 0;
inc .addEventListener('click',function(){
    if(a === 7){
        alert("sorry it's heigh value 🥰");
        inc.style.backgroundColor = "orange";
    }else{
        a++;
        rslt.innerHTML = a;
        rslt.style.backgroundColor = "red";
     }
});

let b = 0;
dec.addEventListener('click',function(){
    if(a <=1){
        alert("sorry it's low value 🤗");
        dec.style.backgroundColor = "green";
        
    }else{
        a--;
        rslt.innerHTML = a;
        rslt.style.backgroundColor = "purple";
    }
});


// CreateNewColor section

let CreateNewColor = document.querySelector("#CreateNewColor");
let clrBtn = document.querySelector(".clrBtn");




clrBtn.addEventListener("click",function(){
    let red = Math.round(Math.random() * 255);
    let green = Math.round(Math.random() * 255);
    let blue = Math.round(Math.random() * 255);
    CreateNewColor.style.backgroundColor = `rgb(${red},${green},${blue})`;
});


//rgbRange section

 /*
    let red = document.getElementById("#red").value;
    let green = document.getElementById("#green").value;
    let blue = document.getElementById("#blue").value;

    red = addEventListener("click",function(){
        let red = Math.round(Math.random() * 255);
        let green = Math.round(Math.random() * 255);
        let blue = Math.round(Math.random() * 255);
        rgbRange.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        box.innerHTML = value;
    });
 */















