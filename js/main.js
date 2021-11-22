// animation
var i = 0;
var txt =
  "An interactive, informational site about the life cycle of our favorite red and spotted beetles.";

var speed = 50; /* The speed/duration of the effect in milliseconds */

function typewriter() {
  if (i < txt.length) {
    document.getElementById("ladybug_intro_text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typewriter, speed);
  }
}
typewriter();

//cursor

let html = document.querySelector("html");
let div = document.querySelector("div");

function logMouse(e) {
  console.log(e.clientX, e.clientY);
  div.style = `top: ${e.clientY}px; left: ${e.clientX}px`;
}

html.addEventListener("mousemove", logMouse);
