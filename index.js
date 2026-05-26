let fraseDia=document.querySelector("#fraseDia")
let cabeceraMenu=document.querySelector("#cabeceraMenu")
let selectorDia=document.querySelector("#selectorDia")

console.log(fraseDia.value)

function escribir(){
    cabeceraMenu.innerHTML=fraseDia.value
}
fraseDia.addEventListener("input", escribir)

function elegir(){
    cabeceraMenu.innerHTML=selectorDia.value
}
fraseDia.addEventListener("change", elegir)