function displayRecipe(response){
    
    new Typewriter("#recipe-container", {
      strings: response.data.answer,
      autoStart: true,
      cursor: "|",
      delay: 25,
    });  
  
}

function generateAnswer(event){
    event.preventDefault();
    
    let userInstructions = document.getElementById("user-instruction");
  let apiKey = "ff38a5fa61btbc02750247354o85830a";
    let prompt = `User instructions : Please provide a simple recipe about ${userInstructions.value}`;
  let context =
    "You are an seasoned chef with expertise in cooking various dishes.Your task is to generate a  simple , beginner-friendly  , short recipe in no more than 8 lines.Use basi HTML , separating each step with a <br> tag and skip two lines afer the recipe , and  sign off with a <strong> Bytes-Bites🍳";

    let apiUrl =
    `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let recipeContainer = document.getElementById("recipe-container");

    recipeContainer.innerHTML = `<div class="generating">⏳ Generating  ${userInstructions.value} recipe</div>`;
    
    axios.get(apiUrl).then(displayRecipe);
}



let generateButton = document.querySelector(".generate-button");
generateButton.addEventListener("click",generateAnswer);