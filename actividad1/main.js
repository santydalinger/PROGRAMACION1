import Cliente from './cliente.js'

function ejecutar(){
    let nombre=document.getElementById("inp_nombre").value
    let apellido=document.getElementById("inp_apellido").value
    let dni=document.getElementById("inp_dni").value
    //creamos la instancia
    let cliente=new Cliente(nombre,apellido,dni)
    cliente.mostrar_dato_personales()
}
document.getElementById("btn_aceptar").addEventListener("click",ejecutar)