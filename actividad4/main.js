import Producto from "./producto.js"

const obtener_producto= async()=>{
    let producto=new Producto()
    producto.opcion=document.getElementById("slt_elegir").value
    producto.mostrar_dato_producto()
}
document.getElementById("slt_elegir").addEventListener("change",obtener_producto);
