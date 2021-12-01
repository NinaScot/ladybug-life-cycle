//CURSOR JSCRIPT
/* define things */
let html = document.querySelector("html");
let div = document.querySelector("div");
/* make function */
function logMouse(e) {
  console.log(e.clientX, e.clientY);
  div.style = `top: ${e.clientY}px; left: ${e.clientX}px`;
}
html.addEventListener("mousemove", logMouse);

// SLIDE TO SLIDE J SCRIPT
// Changing Slides
/* define things */
let slideIndex = 0;
let slides = [
  {
    completedAction: true,
  },
  {
    completedAction: false,
  },
  {
    completedAction: false,
  },
  {
    completedAction: false,
  },
  {
    completedAction: false,
  },
  {
    completedAction: false,
  },
  {
    completedAction: false,
  },
];
let slideElements = document.querySelectorAll(".slide");

// slideAction()
function slideAction() {
  console.log("Doing Slide Action");
  slides[slideIndex].completedAction = true;
  slideElements[slideIndex].classList.add("completed-action");
  // document.getElementsByClassName(action_image).addEventListener(onclick);
  // document.getElementsByClassName(completed_image).classList.toggle("active");
}

// next() check to see if action is complete, if so, navigate to next slide
function next() {
  if (slides[slideIndex].completedAction) {
    slideElements[slideIndex].classList.toggle("active");

    if (slideIndex + 1 > slideElements.length - 1) {
      reset();
    } else {
      slideIndex++;
    }

    slideElements[slideIndex].classList.toggle("active");

    render();
  } else {
    console.log("You must do the action before going next.");
  }
}

// render() represent the change in state visually
function render() {
  document.querySelector("#slide-indicator").innerHTML = slideIndex;
}

function reset() {
  slideIndex = 0;
  slides.forEach((slide) => {
    slide.completedAction = false;
  });
  slideElements.forEach((slideElement) => {
    slideElement.classList.remove("completed-action");
  });
}

document.querySelectorAll(".action_image").forEach((img) => {
  img.addEventListener("click", slideAction);
});
document.querySelector("#slide-next").addEventListener("click", next);

// SOURCE BUTTON JSCRIPT
// Get
// button
let sourcebutton = document.getElementById("sourcebutton");
// aside
let aside = document.querySelector("aside");

// Behavior
function toggleModal() {
  aside.classList.toggle("active");
}

// Wire
sourcebutton.addEventListener("click", toggleModal);
aside.addEventListener("click", toggleModal);
