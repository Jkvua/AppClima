const apiKey = "98cf6ef447034b90a40122310242203";


function telaClima(dddos) {
    console.log(dddos)
    document.querySelector(".title-h1").innerHTML = dddos.location.name + " - " + dddos.location.country
    document.querySelector(".hour").innerHTML = dddos.location.localtime
    document.querySelector(".temp").innerHTML = dddos.current.temp_c + "C°"
    document.querySelector(".texto-previsao").innerHTML = dddos.current.condition.text
    document.querySelector(".vento").innerHTML = dddos.current.wind_kph + "km/h"
    document.querySelector(".umidade").innerHTML = "Humidade " + dddos.current.humidity + "%"
    document.querySelector(".img-previsao").src = "https:" + dddos.current.condition.icon
    
 }

 function telaSemana(prev) {
    console.log(prev);
    
    // Função auxiliar para obter o nome do dia da semana abreviado
    function obterDiaSemanaAbreviado(data) {
        var diasDaSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
        return diasDaSemana[new Date(data).getDay()];
    }

    // Função para atualizar os dias da semana
    function atualizarDias() {
        // Iterando sobre os dias da semana disponíveis nos dados fornecidos
        for (var i = 0; i < prev.forecast.forecastday.length; i++) {
            var dataDia = prev.forecast.forecastday[i].date;
            var tempmax = prev.forecast.forecastday[i].day.maxtemp_c; // Corrigido para obter a temperatura máxima de cada dia
            document.querySelector(".imagem2").src = "https:" + prev.forecast.forecastday[0].day.condition.icon
            var diaDaSemana = obterDiaSemanaAbreviado(dataDia);
            document.querySelector(".day" + (4 + i)).innerHTML = diaDaSemana + ', ' + dataDia + ' Max: ' + tempmax;
        }
    }

    // Chamando a função para atualizar os dias pela primeira vez
    atualizarDias();

    // Definindo um intervalo de tempo para continuar atualizando os dias da semana infinitamente
    setInterval(atualizarDias, 1000 * 60 * 60 * 24); // Atualiza a cada 24 horas (um dia)
}


async function buscarCity(city) {
    const dddos = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&lang=pt`).then( resposta => resposta.json())
    telaClima(dddos)
}

async function previsaoSemana(city) {
    const prev = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=98cf6ef447034b90a40122310242203&q=${city}&days=7`).then(resposta => resposta.json());
    telaSemana(prev) // Acesse a temperatura máxima para o dia 1
}




async function botaoShow() {
    const cidade = document.querySelector(".input-cidad").value;
    await buscarCity(cidade); // Espere pelos dados do clima atual
    await previsaoSemana(cidade); // Então chame previsaoSemana para buscar a previsão
}




//async function previsaoSemana(city) {
    //const prev = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7&aqi=yes&alerts=yes`).then( resposta => resposta.json)
    //console.log(prev)
//}


//function botaoShow() {
    //const city = document.querySelector(".input-cidad").value

    //buscarCity(city)
//}




//`http://api.weatherapi.com/v1/forecast.json?key=98cf6ef447034b90a40122310242203&q=Brazil&days=7&aqi=yes&alerts=yes`