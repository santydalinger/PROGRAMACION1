import Vehiculo from './vehiculo.js'
//Forma 1-envio de datos a traves de constructor 
function ejecutar(){
    let km=document.getElementById("inp_km").value
    //creamos la instancia de la clase
    let vehiculo=new Vehiculo(km)
    vehiculo.mostrar_km()
}
document.getElementById("btn_mostrar").addEventListener("click",ejecutar)

//Forma 2
const mostrar_marca = ()=>{
    let vehiculo=new Vehiculo()
    //asignamos un valor al artibuto
    vehiculo.marca=document.getElementById("slt_marca").value
    //posteriormente invocamos al metodo mostrar_marca()
    vehiculo.mostrar_marca()
}
document.getElementById("btn_aceptar").addEventListener("click",mostrar_marca)