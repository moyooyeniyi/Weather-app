function displayWeather(response){
console.log(response.data)
}
function searchCity(event){
  event.preventDefault()

  let searchText = document.querySelector("#search-text")

  let h1 = document.querySelector("h1")
  h1.innerHTML = searchText.value
  let city = searchText.value
  let key = "d0f486766tb3do97a754aa844599ab3a"
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}`

axios.get(apiUrl).then(displayWeather)
  
}

let searchButton = document.querySelector("#search-button")

searchButton.addEventListener("click", searchCity)

