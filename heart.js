var a = new Audio("./c.mp3");
let heart = document.querySelector(".heart");
heart.addEventListener("click", (e) => {
    if (a.paused || a.currentTime <= 0) {
        a.play();
      } else {
        a.pause();
      }
});
