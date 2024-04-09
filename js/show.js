const apiKey = "98cf6ef447034b90a40122310242203";

function dadosShow() {
    document.querySelector("#")
}

async function cidadeEspecifica(){
    const ddados = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${Rio_de_Janeiro}`)
    
    dadosShow(ddados)
}