function searchCity(event){
  event.preventDefault()

  let searchText = document.querySelector("#search-text")

  let h1 = document.querySelector("h1")
  h1.innerHTML = searchText.value

  
}

let searchButton = document.querySelector("#search-button")

searchButton.addEventListener("click", searchCity)
