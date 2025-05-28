
function displayAnswer(response){
    
  let apiKey ="ff38a5fa61btbc02750247354o85830a";
    let apiPrompt = "Please provide with an easy recipe ";
  let apiContext =
    "You are an experienced chef who has alot of experience in cooking a variety of dishes.Your job is to generate a not more than 10 lines explaining the easiest recipe. Follow these instructions :in basic HTML separate each line with a <br> and sign off at the end with a <strong> Bytes-Bites🍳";

    let apiUrl =
    `https://api.shecodes.io/ai/v1/generate?prompt={prompt}&context={context}&key={key}`;
    alert(response.data.answer);
    axios.get(apiUrl).then(displayAnswer);
}



let generateButton = document.querySelector(".generate-button");
generateButton.addEventListener("click",displayAnswer);