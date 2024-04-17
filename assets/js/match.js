function displayMatchedDogs() {
  
  const matchedArray = JSON.parse(localStorage.getItem("matchedArray")) || [];
  const dogContainer = document.getElementById("matchContainer");

  const uniqueDogPairs = new Set();

  matchedArray.forEach(function (dog) {
    console.log("Matched Dog:", dog);

  
    const dogPair = dog.name + dog.image_link;
    if (!uniqueDogPairs.has(dogPair)) {
      const dogDiv = document.createElement("div");
      const dogImage = document.createElement("img");
      const dogName = document.createElement("p");

      dogImage.src = dog.image_link;
      dogName.textContent = dog.name;

      dogDiv.appendChild(dogImage);
      dogDiv.appendChild(dogName);
      dogContainer.appendChild(dogDiv);

    
      uniqueDogPairs.add(dogPair);
    }
  });
}

displayMatchedDogs();