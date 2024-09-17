// Constantes e seleção de elementos

const apiKey = "8411249319fd6709c68cf18072ca9350"
const unsplashKey = "0XUY0m16kysWEkerX78-avU7Wy7tepg2l4Ud_nEy94E"
const apiUnsplash = `https://api.unsplash.com/search/photos?page=1&query=` // Corrigido

const cityInput = document.getElementById("city_name")
const searchButton = document.getElementById("go-search")
const weatherDescription = document.querySelector("#temp-description")
const cityElement = document.querySelector("#nome-cidade")
const tempElement = document.querySelector("#temp-value")
const temp_maxElement = document.querySelector("#temp-max")
const temp_minElement = document.querySelector("#temp-min")
const humidityElement = document.querySelector("#umidade")
const whindElement = document.querySelector("#vento")
const flagElement = document.querySelector("#flag")
const weatherIconElement = document.querySelector("#temp-img")
const fundo_imagem = document.getElementById("fundo_imagem")


const cityInfos = document.getElementById("city")
const infos = document.getElementById("infos")




// Função para obter os dados do clima
const getWeatherData = async (city) => {
    const apiWatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`

    const res = await fetch(apiWatherURL)
    const data = await res.json()
    console.log(data)

    return data
}

// Função para mostrar os dados do clima e aplicar a imagem de fundo
const showWeatherData = async (city) => {
    const data = await getWeatherData(city)

    cityElement.innerText = data.name
    weatherIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`)

    // lógica para deixar a primeira letra da descrição em maiúscula
    weatherDescription.innerText = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1).toLowerCase()

    tempElement.innerHTML = `${parseInt(data.main.temp)} <sup>°C<sup/>`
    temp_maxElement.innerHTML = `${parseInt(data.main.temp_max)} <sup>°C<sup/>`
    temp_minElement.innerHTML = `${parseInt(data.main.temp_min)} <sup>°C<sup/>`
    humidityElement.innerHTML = `${data.main.humidity}%`
    whindElement.innerHTML = `${data.wind.speed} Km/h`

    // Mostrar as informações
    cityInfos.style.display = 'flex'    // centraliza o nome da cidade
    infos.style.display = 'block'       // centraliza as infos



    // Fazer a busca da imagem da cidade no Unsplash
    const unsplashURL = `${apiUnsplash}${city}&client_id=${unsplashKey}`


    try {
        const response = await fetch(unsplashURL)
        const imageData = await response.json()

        if (imageData.results.length > 0) {
            // Pega a URL da primeira imagem encontrada
            const imageURL = imageData.results[0].urls.regular
            console.log(imageURL)

            // Define o plano de fundo
            fundo_imagem.style.backgroundImage = `url(${imageURL})`
            fundo_imagem.style.backgroundSize = "cover"
            fundo_imagem.style.backgroundColor = "rgba(0, 0, 0, 0.3)"

        } else {
            console.log("Nenhuma imagem foi encontrada.")
            // Caso nenhuma imagem seja encontrada, define uma imagem padrão ou cor de fundo
            fundo_imagem.style.backgroundColor = "#cccccc" // exemplo de cor padrão
        }

    } catch (error) {
        console.error("Erro ao buscar imagem:", error)
        // Caso ocorra um erro, define uma cor de fundo padrão
        fundo_imagem.style.backgroundColor = "#cccccc"
    }
}


//Eventos

//pega o valor de dentro da caixa de input com o nome da cidade.
searchButton.addEventListener("click", (e) => {
    e.preventDefault()

    const city = city_name.value

    showWeatherData(city)
})