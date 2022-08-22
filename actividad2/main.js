import Pitagoras from "./pitagoras.js"


const calcular_pitagoras=()=>{

    let pitagoras=new Pitagoras()
    pitagoras.ca=parseInt(document.getElementById("inp_ca").value)
    pitagoras.co=parseInt(document.getElementById("inp_co").value)
    let resultado=pitagoras.calcular_pitagoras()
    document.getElementById("h1").textContent=(resultado)
}
document.getElementById("btn_aceptar").addEventListener("click",calcular_pitagoras)