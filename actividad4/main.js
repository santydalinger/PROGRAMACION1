import Producto from "./producto.js"

const obtener_producto= async()=>{
    let producto=new Producto()
    producto.mostrar_dato_producto()
}
obtener_producto()