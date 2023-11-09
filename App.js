const
  goal = document.querySelectorAll(".plus"),
  score = document.querySelector("#score"),
  min = document.querySelectorAll(".minus"),
  goal2= document.querySelectorAll(".plus-2"),
  goal3=document.querySelectorAll(".plus-3"),
  score2= document.querySelector("#span-score");

let x = 0;

goal[0].addEventListener("click", function () {
  x++;
  score.innerText = x;
});
min[0].addEventListener("click", function () {
  if (x > 0) {
    x--; 
    score.innerText = x;
  }
});

goal2[0].addEventListener("click", function () {
  x+=2;
  score.innerText = x;
});

goal3[0].addEventListener("click", function () {
  x+=3;
  score.innerText = x;
});


let y = 0;

goal[1].addEventListener("click", function () {
  y++;
 
  score2.innerText = y;
});
min[1].addEventListener("click", function () {
  if (y > 0) {
    y--; 
    score2.innerText = y;
  }
});

goal2[1].addEventListener("click", function () {
  y+=2;
  score2.innerText = y;
});

goal3[1].addEventListener("click", function () {
  y+=3;
  score2.innerText = y;
});


function myFunction(){
  let takim = prompt("lütfen takım ismi giriniz");
if (takim != "") {
  document.getElementById("takim-1").textContent= takim ;
  
};
};

function myFunction2(){
  let takim = prompt("lütfen takım ismi giriniz");
if (takim != "") {
  document.getElementById("takim-2").textContent= takim ;
  
};
};
