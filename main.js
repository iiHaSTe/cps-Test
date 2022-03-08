console.log("Hello, world");

var div2 = document.querySelector("#div2");
var btn1 = document.getElementById("btn1");
var started = false;
var counter = 0;

btn1.addEventListener("click", ()=>{
    div2.innerHTML = "";
    let myBtn = document.createElement("button");
    myBtn.className = "btn2";
    myBtn.id = "btn2";
    div2.appendChild(myBtn);
    document.querySelector("#bla1").style.display = "none";
    document.querySelector("#bla2").style.display = "none";
    console.log(myBtn);
    console.log(div2);
    started = true;
    let btn2 = document.getElementById("btn2");
    btn2.addEventListener("click", ()=>{
        if (started === true){
            counter++;
            btn2.innerText = counter;
        }
    });



    setTimeout(()=>{
        let cps = counter/10;
        div2.innerHTML = "";
        div2.innerHTML = `<h1>${cps} cps</h1>`;
    }, 10000);
});
