function generateToast(event) {
  event.preventDefault();

  new Typewriter("#toast", {
    strings: "Cheers, mate",
    autoStart: true,
    delay: 20,
    cursor: null,
  });
}

let formElement = document.querySelector("#toast-generator");
formElement.addEventListener("submit", generateToast);
