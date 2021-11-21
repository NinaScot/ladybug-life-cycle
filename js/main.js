// animation
var i = 0;
var txt =
  "An interactive, informational site about the life cycle of our favorite red and spotted beetles."; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("ladybug_intro_text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
