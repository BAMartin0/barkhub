

function fetchDogs() {
    const apiKey = '+SZxtNXiFqfl0H6PZw8wVQ==v7XBFa53qMupptej'; // Replace with your API key
    const energy = document.getElementById('energy').value;
    const shedding = document.getElementById('shedding').value;
    const weight = document.getElementById('weight').value;
    const barking = document.getElementById('barking').value;
    const protectiveness = document.getElementById('protectiveness').value;

    const url = `https://api.api-ninjas.com/v1/dogs?energy=${energy}&shedding=${shedding}&min_weight=${weight}&barking=${barking}&protectiveness=${protectiveness}`;

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
                console.log("Nah B guess again");
            }
        } else {
            console.error('Error: ', xhr.responseText);
        }
    }
};
xhr.send();
}