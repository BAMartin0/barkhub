function fetchDogs() {
    const apiKey = '+SZxtNXiFqfl0H6PZw8wVQ==v7XBFa53qMupptej'; // Replace with your API key
    const energy = document.getElementById('energy').value;
    const shedding = document.getElementById('shedding').value;
    const weight = document.getElementById('weight').value;
  
    const url = `https://api.api-ninjas.com/v1/dogs?energy=${energy}&shedding=${shedding}&min_weight=${weight}`;

    var name = 'golden retriever'
    $.ajax({
        method: 'GET',
        url: url,
        headers: { 'X-Api-Key': '+SZxtNXiFqfl0H6PZw8wVQ==v7XBFa53qMupptej'},
        contentType: 'application/json',
        success: function(result) {
            console.log(result);

            if (result.length === 0){
                console.log("Nah B guess again");
            }
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });





}

//     fetch(url, {
//         // mode: 'no-cors'
//     })
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => {
//         if (data.length < 5) {
//           alert("There are less than 5 results based on the given parameters.");
//         } else {
//           displayDogs(data);
//         }
//       })
//       .catch(error => {
//         console.error('There was a problem with the fetch operation:', error);
//       });
//   }
  
//   function displayDogs(dogs) {
//     const dogsContainer = document.getElementById('dogs');
//     dogsContainer.innerHTML = '';
  
//     dogs.forEach(dog => {
//       const dogElement = document.createElement('div');
//       dogElement.textContent = `${dog.name}: Energy - ${dog.energy}, Shedding - ${dog.shedding}, Weight - ${dog.weight} lbs`;
//       dogsContainer.appendChild(dogElement);
//     });
//   }
  
// var name = 'golden retriever'
// $.ajax({
//     method: 'GET',
//     url: url,
//     headers: { 'X-Api-Key': '+SZxtNXiFqfl0H6PZw8wVQ==v7XBFa53qMupptej'},
//     contentType: 'application/json',
//     success: function(result) {
//         console.log(result);
//     },
//     error: function ajaxError(jqXHR) {
//         console.error('Error: ', jqXHR.responseText);
//     }
// });