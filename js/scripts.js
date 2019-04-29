// document.querySelector('.weeknd').addEventListener("mouseover", mouseOver);
// document.querySelector('.weeknd').addEventListener("mouseout", mouseOut);

// function mouseOver() {
//   document.getElementById("demo").style.color = "red";
// }

let weeknd = document.querySelector('.weeknd');

weeknd.addEventListener("mouseover", playAudio);

function playAudio(event) {
    document.querySelector('#pnd').play();
}
