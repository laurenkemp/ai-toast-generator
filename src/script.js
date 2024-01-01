function displayToast(result) {
  new Typewriter("#toast", {
    strings: result.data.answer,
    autoStart: true,
    delay: 20,
    cursor: null,
  });
}

function generateToast(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "b66fb8b194b4actb07446af800f7eb3o";
  let context =
    "You are a cheerful AI toast assistant! You come up with extremely short, rhyming toasts. Your mission is to generate an extremely short, rhyming toast that only has two lines. Make sure to follow the user instructions.";
  let prompt = `User instructions are: Please generate a very short rhyming toast with only two lines about ${instructionsInput.value}. Separate each line with a <br />.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let toastElement = document.querySelector("#toast");
  toastElement.classList.remove("hidden");

  axios.get(apiUrl).then(displayToast);
}

let formElement = document.querySelector("#toast-generator");
formElement.addEventListener("submit", generateToast);
