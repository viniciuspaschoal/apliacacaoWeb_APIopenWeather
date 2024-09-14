//Variaveis e seleção de elementos

const apiKey = "8411249319fd6709c68cf18072ca9350"


const cityInput = document.getElementById("#city_name")
const searchButton = document.getElementById("go-search")
const cityElement = document.querySelector("#nome-cidade")
const tempElement = document.querySelector("#temp-value")
const temp_maxElement = document.querySelector("#temp-max")
const temp_minElement = document.querySelector("#temp-min")
const humidityElement = document.querySelector("#umidade")
const whindElement = document.querySelector("#vento")
const flagElement = document.querySelector("#flag") 
const weatherIconElement = document.querySelector("#temp-img")


//Funçoes
const getWeatherData = async(city) =>{
    const apiWatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`

    const res = await fetch(apiWatherURL)
    const data = await res.json()
    console.log(data)

    return data
}


const showWeatherData = async (city) => {
    const data = await getWeatherData(city)
    

    cityElement.innerText = data.name
    tempElement.innerHTML = `${parseInt(data.main.temp)} <sup>°C<sup/>`
    temp_maxElement.innerHTML = `${parseInt(data.main.temp_max)} <sup>°C<sup/>`
    temp_minElement.innerHTML = `${parseInt(data.main.temp_min)} <sup>°C<sup/>`
    humidityElement.innerText = data.main.humidity

}


//Eventos

//pega o valor de dentro da caixa de input com o nome da cidade.
searchButton.addEventListener("click", (e) => {
    e.preventDefault()

    const city = city_name.value

    showWeatherData(city)
})