

const apiKey = "98cf6ef447034b90a40122310242203";

function telaClima(dddos) {
    console.log(dddos);
    document.querySelector(".title-h1").innerHTML = dddos.location.name + " - " + dddos.location.country;
    document.querySelector(".hour").innerHTML = dddos.location.localtime;
    document.querySelector(".temp").innerHTML = dddos.current.temp_c + "C°";
    document.querySelector(".texto-previsao").innerHTML = dddos.current.condition.text;
    document.querySelector(".vento").innerHTML = dddos.current.wind_kph + "km/h";
    document.querySelector(".umidade").innerHTML = "Umidade: " + dddos.current.humidity + "%";
    document.querySelector(".img-previsao").src = "https:" + dddos.current.condition.icon;
}


async function buscarCity(city) {
    const dddos = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&lang=pt`).then(resposta => resposta.json());
    telaClima(dddos);
}

async function previsaoSemana(city) {
    const prev = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=98cf6ef447034b90a40122310242203&q=${city}&days=4`).then(resposta => resposta.json());
    telaSemana(prev); // Acesse a temperatura máxima para o dia 1
}

function telaSemana(prev) {
    console.log(prev);
    
    document.querySelector(".imagem1").src = "https:" + prev.forecast.forecastday[0].day.condition.icon;
    document.querySelector(".imagem2").src = "https:" + prev.forecast.forecastday[1].day.condition.icon;
    document.querySelector(".imagem3").src = "https:" + prev.forecast.forecastday[2].day.condition.icon;
    document.querySelector(".day-tamp1").innerHTML = "Max: " + prev.forecast.forecastday[0].day.maxtemp_c;
    document.querySelector(".day-tamp2").innerHTML = "Max: " + prev.forecast.forecastday[1].day.maxtemp_c;
    document.querySelector(".day-tamp3").innerHTML = "Max: " + prev.forecast.forecastday[2].day.maxtemp_c;
    document.querySelector(".day-tamp1-min").innerHTML = "Min: " + prev.forecast.forecastday[0].day.mintemp_c
    document.querySelector(".day-tamp2-min").innerHTML = "Min: " + prev.forecast.forecastday[1].day.mintemp_c
    document.querySelector(".day-tamp3-min").innerHTML = "Min: " + prev.forecast.forecastday[2].day.mintemp_c
    
}


async function botaoShow() {
    const cidade = document.querySelector(".input-cidad").value;
    await buscarCity(cidade); // Espere pelos dados do clima atual
    await previsaoSemana(cidade); // Então chame previsaoSemana para buscar a previsão
}

document.addEventListener("DOMContentLoaded", function() {
    let local = window.location;
    buscarCity(local.search.split("=")[1]);
    previsaoSemana(local.search.split("=")[1]);
});

const node = document.getElementById("cityinput");
node.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        botaoShow()
    }
});