//      * const url = `https://api.api-ninjas.com/v1/dogs?energy=${energy}&shedding=${shedding}&min_weight=${weight}`;

function fetchDogs() {
    const apiKey = '+SZxtNXiFqfl0H6PZw8wVQ==v7XBFa53qMupptej'; // Replace with your API key
    const energy = document.getElementById('energy').value;
    const shedding = document.getElementById('shedding').value;
    const weight = document.getElementById('weight').value;
    //const barking = document.getElementById('barking').value;
     //const temperment = document.getElementById('temperment').value;
    //const playfulness = document.getElementById('playfulness').value;
    //const protectiveness = document.getElementById('protectiveness').value;
    const url = `https://api.api-ninjas.com/v1/dogs?energy=${energy}&shedding=${shedding}&min_weight=${weight}`;
    // var name = 'golden retriever'
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