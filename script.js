function displayWeather(response){
console.log(response.data)
  let numberNew = document.querySelector("#number")
  numberNew = Math.round(response.data.temperature.current)
  number.innerHTML = `🌤${numberNew}`

let humidity = response.data.temperature.humidity

let windSpeed = response.data.wind.speed


let humidityWind = document.querySelector("#humidity-wind")

humidityWind.innerHTML = `Humidity:${humidity}% Wind:${windSpeed}`

let now = new Date()
let date = now.getDate()
let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]
  let day = days[now.getDay()]

  let hour = now.getHours()
  let minute = now.getMinutes()

  let conditionDescription = response.data.condition.description

  let dayCondition = document.querySelector("#condition-day")

  dayCondition.innerHTML = `${day} ${hour}:${minute}, ${conditionDescription}`
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


