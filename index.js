function displayJoke(response) {
    new Typewriter("#joke", {
      strings: response.data.answer,
      autoStart: true,
      delay: 1,
      cursor: "",
    });
  }
  
  function generateJoke(event) {
    event.preventDefault();
  
    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "36fob92bf0ccc549ftc497fd13a0650d";
    let context =
      "You are a joke generating AI designed for a light-hearted, family-friendly joke app. Your jokes should be clean, funny and suitable for all ages. The jokes can be in various categories, such as animal jokes, tech jokes and dad jokes. Avoid using offensive or inappropriate content or language. Avoid using long jokes. The goal is to make users laugh and enjoy thier time using the app.";
    let prompt = `User instructions: Generate a Joke about ${instructionsInput.value}`;
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  
    let poemElement = document.querySelector("#joke");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = `<div class="generating">⏳ Generating a Joke about ${instructionsInput.value}</div>`;
  
    axios.get(apiURL).then(displayJoke);
  }
  
  let jokeFormElement = document.querySelector("#joke-generator-form");
  jokeFormElement.addEventListener("submit", generateJoke);