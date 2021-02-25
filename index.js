// CHALLENGE 1: Update Quote on page load 😗

// Here's where we will add javascript effects
// It's connected to index.html using the script tag.

// 1. Get the quote from Chuck norris API (use JS fetch())
// https://api.chucknorris.io/jokes/random

function getRandomJokes() {
  const url = "https://api.chucknorris.io/jokes/random";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const quoteText = data.value;
      // 2. Get the #quote-text element with getElementById('id') and store in variable
      const quoteElement = document.querySelector("#quote-text");
      // 3. Use the quote to update the element InnerText from previous step.
      quoteElement.innerText = quoteText;
    });
}

getRandomJokes();

// CHALLENGE 2: Update Quote from button click 😗

const btnElement = document.querySelector("button");

btnElement.addEventListener("click", getRandomJokes);
// 1. get the button with querySelector and save in variable
// 2. Add a click event listener
// 3. Inside of the event listener get the quote paragraph
// 4. Update the quote paragraph inner Text with the API.

// 🔥 EXTRA
// Step 3,4 from challenge 2 are the same as step 1,2,3 from challenge 1
// Build a function to reuse on both challenges and DRY your code.

// DRY
