function displayMatchedDogs() {
  const matchedArray = JSON.parse(localStorage.getItem("matchedArray")) || [];
  const previousMatchContainer = document.getElementById("previousMatchContainer");
  const currentMatchContainer = document.getElementById("currentMatchContainer");

  // Clear the containers to avoid duplicating content
  previousMatchContainer.innerHTML = '';
  currentMatchContainer.innerHTML = '';

  // Check if there is at least one match to display
  if (matchedArray.length > 0) {
    // Display the latest match in the current match container
    const latestMatch = matchedArray[matchedArray.length - 1];
    displayDog(latestMatch, currentMatchContainer);

    // Display all previous matches
    for (let i = 0; i < matchedArray.length - 1; i++) {
      displayDog(matchedArray[i], previousMatchContainer);
    }
  }
}

// function to create and append dog information to the specified container
function displayDog(dog, container) {
  const dogDiv = document.createElement("div");
  const dogImage = document.createElement("img");
  const dogName = document.createElement("p");

  dogImage.src = dog.image_link;
  dogName.textContent = dog.name;

  dogDiv.appendChild(dogImage);
  dogDiv.appendChild(dogName);
  container.appendChild(dogDiv);
}

displayMatchedDogs();

document.getElementById('clearPreviousMatches').addEventListener('click', function() {
  const previousMatchContainer = document.getElementById('previousMatchContainer');
  previousMatchContainer.innerHTML = ''; // Clear the contents of the container

  // clear the contents from local storage
  const matchedArray = JSON.parse(localStorage.getItem("matchedArray")) || [];
  if (matchedArray.length > 1) {
    // Remove all except the latest match
    const newMatchedArray = [matchedArray[matchedArray.length - 1]];
    localStorage.setItem('matchedArray', JSON.stringify(newMatchedArray));
  }
});
// back button functionality
document.getElementById('backButton').addEventListener('click', function() {
  window.history.back(); // Go back in the browser history
});
