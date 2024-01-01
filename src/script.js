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
    "You are a cheerful AI toast machine! You come up with one-line toasts. Your mission is to generate an extremely short, rhyming toast that only has one line. Make sure to follow the user instructions.";
  let prompt = `User instructions are: Please generate a rhyming toast with ONLY ONE LINE about ${instructionsInput.value} and separate each line with a <br />. DO NOT add a <br /> after the last line`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let toastElement = document.querySelector("#toast");
  toastElement.classList.remove("hidden");

  axios.get(apiUrl).then(displayToast);
}

let formElement = document.querySelector("#toast-generator");
formElement.addEventListener("submit", generateToast);
