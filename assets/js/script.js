function fetchDogs() {
  const apiKey = "+SZxtNXiFqfl0H6PZw8wVQ==v7XBFa53qMupptej"; // Replace with your API key
  const energy = document.getElementById("energy").value;
  const shedding = document.getElementById("shedding").value;
  const weight = document.getElementById("weight").value;
  const barking = document.getElementById("barking").value;
  const protectiveness = document.getElementById("protectiveness").value;

  const url = `https://api.api-ninjas.com/v1/dogs?energy=${energy}&shedding=${shedding}&max_weight=${weight}&barking=${barking}&protectiveness=${protectiveness}`;
  // changed min_weight to max_weight
  var xhr = new XMLHttpRequest();
  var url2 = "your_url_here";
  xhr.open("GET", url, true);
  xhr.setRequestHeader("X-Api-Key", "+SZxtNXiFqfl0H6PZw8wVQ==v7XBFa53qMupptej");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        var result = JSON.parse(xhr.responseText);
        console.log(result);
        if (result.length === 0) {
          const modal = document.getElementById('noDogsModal');
          modal.classList.add('is-active')

          document.getElementById("tryAgainButton").addEventListener("click", function () {
            var modal = document.getElementById('noDogsModal');
            modal.classList.remove('is-active');
          });
            
        } else {
          const randomIndex = Math.floor(Math.random() * result.length);
          const randomResult = result[randomIndex];

          console.log("Random result:", randomResult);

          const matchedArray =
            JSON.parse(localStorage.getItem("matchedArray")) || [];
          const dogData = {
            image_link: randomResult.image_link,
            name: randomResult.name,
          };

          matchedArray.push(dogData);

          localStorage.setItem("matchedArray", JSON.stringify(matchedArray));

          window.location.href = "match.html"; //moved up within else statement and now error button only triggers if length is 0
        }
      } else {
        console.error("Error: ", xhr.responseText);
      }
    }
  };
  xhr.send();
}

function isOverlappingWithSubmit() {
  const messageContainer = document.getElementById('fact-text');
  const submitButton = document.getElementById('matchButton');

  const messageRect = messageContainer.getBoundingClientRect();
  const submitRect = submitButton.getBoundingClientRect();

  return (
      messageRect.bottom > submitRect.top &&
      messageRect.top < submitRect.bottom &&
      messageRect.right > submitRect.left &&
      messageRect.left < submitRect.right
  );
}

// Function to hide the message container if it overlaps with the submit button
function adjustMessageContainerVisibility() {
  const messageContainer = document.getElementById('fact-text');
  const submitButton = document.getElementById('matchbutton');

  if (isOverlappingWithSubmit()) {
      messageContainer.style.display = 'none'; // Hide the message container if it overlaps with the submit button
  } else {
      messageContainer.style.display = 'block'; // Show the message container if it doesn't overlap
  }
}

// Call the adjustMessageContainerVisibility function whenever necessary
// For example, you can call it on window resize or scroll events
window.addEventListener('resize', adjustMessageContainerVisibility);
window.addEventListener('scroll', adjustMessageContainerVisibility);