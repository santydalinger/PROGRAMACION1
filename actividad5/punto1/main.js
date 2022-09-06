import Cotizacion from "./cotizacion.js"


const obtener_dolar= async()=>{
    let cotizacion=new Cotizacion()
    cotizacion.mostrar_dato_dolar()
}
obtener_dolar()