let cabeceraMenu=document.querySelector("#cabeceraMenu")
let fraseDia=document.querySelector("#fraseDia")
let selectorDia=document.querySelector("#selectorDia")

function frasesDia (){
    fraseDia.innerHTML=fraseDia.value
}
cabeceraMenu.addEventListener("input", frasesDia)

function seleccionarDia (){
    fraseDia.innerHTML=selectorDia.value
}
fraseDia.addEventListener("change", seleccionarDia)

