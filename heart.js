var a = new Audio("./c.mp3");
let heart = document.querySelector(".heart");
heart.addEventListener("click", (e) => {
    a.play();
});
