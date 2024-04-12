$(function () {
  // Owl Carousel
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 3,
    margin: 10,
    loop: true,
    nav: true,
  });
});

const key = "98cf6ef447034b90a40122310242203";

function dadosTela(dados) {
  console.log(dados)
  document.querySelector(".cidade").innerHTML = "Tempo em " + dados.location.name
  document.querySelector(".temp").innerHTML = dados.current.temp_c + "°C"
  document.querySelector(".texto-previsao").innerHTML = dados.current.condition.text
  document.querySelector(".umidade").innerHTML = dados.current.humidity + "% de umidade"
  document.querySelector(".img-previsao").src = "https:" + dados.current.condition.icon
  document.querySelector(".dataHora").innerHTML = dados.location.localtime
  document.querySelector(".pais").innerHTML = dados.location.country
  document.querySelector("#link-cidade").href = "../paginas/show.html?cidade=" + dados.location.name 
}

async function buscarCidade(cidade) {
  const dados = await fetch(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${cidade}&lang=pt`).then(resposta => resposta.json())
  
  dadosTela(dados)
  
}

function clicaNoBotao() {
  const cidade = document.querySelector(".input-cidade").value;

  buscarCidade(cidade)
}

//Detecção de tecla
const node = document.getElementById("cityinput");
node.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        clicaNoBotao( )
    }
});


//https://codepen.io/byShep/pen/zYxgrbp//
