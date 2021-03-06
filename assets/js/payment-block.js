"use sting";



/*
-------------------------------------------
CURRENCY TOGGLE
-------------------------------------------
*/
let button = document.getElementsByClassName("pay_currency");

for (let key in button) {
  button[0].style.backgroundImage =
    "linear-gradient(195deg, #49a3f1 0%, #1A73E8 100%)";
  button[0].style.color = "#fff";

  button[key].onclick = function () {
    for (let i = 0; i < button.length; i++) {
      button[i].style.backgroundImage = "none";
      button[key].style.backgroundImage =
        "linear-gradient(195deg, #49a3f1 0%, #1A73E8 100%)";

      button[i].style.color = "#49a3f1";
      button[key].style.color = "#fff";

    }
  };
}

/*
-------------------------------------------
COPY STRINGS (PAYMENT)
-------------------------------------------
*/

let copyButton = document.getElementsByClassName('copy_button');

for (let key in copyButton){

  copyButton[key].onclick = function(){

    this.style.color = "#49a3f1";

    let copyText= document.getElementsByClassName("copy_text");
    navigator.clipboard.writeText(copyText[key].innerHTML);


    let info = document.getElementsByClassName("copy_info");
    info[key].innerHTML = 'Cкопійовано';

  
    let start = Date.now();
  
    let timer = setInterval(function () {
      let timePassed = Date.now() - start;
  
      if (timePassed > 2800) {
        copyButton[key].style.color = "grey";
        info[key].innerHTML = 'Скопіювати';
      }
     
  
      if (timePassed > 3000) clearInterval(timer);
    });

  }
  
}








