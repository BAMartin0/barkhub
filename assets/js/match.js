function displayMatchedDogs() {
  // Retrieve matched data from local storage
  const matchedArray = JSON.parse(localStorage.getItem("matchedArray")) || [];
  const dogContainer = document.getElementById("matchContainer");

  // Display matched dogs
  matchedArray.forEach(function (dog) {
    console.log("Matched Dog:", dog);

    const dogDiv = document.createElement("div");
    const dogImage = document.createElement("img");
    const dogName = document.createElement("p");

    dogImage.src = dog.image_link;
    dogName.textContent = dog.name;

    dogDiv.appendChild(dogImage);
    dogDiv.appendChild(dogName);
    dogContainer.appendChild(dogDiv);
  });
}

// Call the function to display matched dogs
displayMatchedDogs();
