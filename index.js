const $input = document.getElementById("input");
const $button = document.getElementById("button");
const $placeholder = document.getElementById("placeholder");



const APP_ID = 'cfa21574b6f07ffa7173add34f630868';

const fetchData = async () => {
    try {
        let api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${$input.value}&lang=es&units=metric&appid=${APP_ID}`)
        let data = await api.json();
    
        $placeholder.innerHTML = `
            <h3>${data.name}</h3>
            <h5>${Math.floor(data.main.temp_max)}°C</h5>
            <h5>${data.weather[0].main}</h5>
        `    
    } catch (error) {
        $placeholder.innerHTML = `<h3>Ocurrio un error, intentalo nuevamente</h3>` 
    }
}

$button.addEventListener("click", () => {
    fetchData();
})