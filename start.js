document.addEventListener("click", function () {
    var audio = document.getElementById("background-music");
    audio.volume = 1.05;
    audio.play();
}, { once: true });