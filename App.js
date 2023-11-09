const goal = document.querySelector(".plus"),
  score = document.querySelector("#score"),
  min = document.querySelector(".minus");

let x = 0;

goal.addEventListener("click", function () {
  x++;
  x = x < 10 ? "0" + x : x;
  score.innerText = x;
});
min.addEventListener("click", function () {
  if (x > 0) {
    x--;
    x = x < 10 ? "0" + x : x;
    score.innerText = x;
  }
});
