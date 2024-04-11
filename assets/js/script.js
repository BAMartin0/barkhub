const url = 'https://api.api-ninjas.com/v1/dogs?shedding=1&barking=1&energy=3'

fetch(url, {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": 'hAdradsYY5MNK6u7ypry0Q == ZUDeF8Ux1ilWg4EP',
    "X-RapidAPI-Host": "famous-quotes4.p.rapidapi.com",
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));