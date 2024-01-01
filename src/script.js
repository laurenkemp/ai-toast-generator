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
    "You are a cheerful, rhyming expert! You come up with clever toasts about any subject. Your mission is to generate an extremely short toast. Make sure to follow the user instructions.";
  let prompt = `User instructions are: Please generate an extremely short, rhyming toast about ${instructionsInput.value} and separate each line with a <br />`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayToast);
}

let formElement = document.querySelector("#toast-generator");
formElement.addEventListener("submit", generateToast);
