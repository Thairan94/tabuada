var valor = document.querySelector("input")
var tabuada = document.querySelector(".tabuada")
const CALCULAR = document.querySelector(".container button")

CALCULAR.addEventListener("click", () => {

    if(Number(valor.value) < 1 || Number(valor.value) > 12) {

        tabuada.innerHTML = "Insira um valor no intervalo de 1 a 12!"
    }else{
        for(i = 1; i <=12; i++){

            var calc = String(i) + " x " + valor.value + " = " + i * Number(valor.value);

            var resultado = document.createElement("p")
            resultado.innerText = calc
            tabuada.appendChild(resultado)
        }
    }
})