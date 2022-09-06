export default class Cotizacion {
    constructor() { }
    async mostrar_dato_dolar() {
        const dolar = await fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
        const lista_dolar = await dolar.json()
        let filas = []
        lista_dolar.forEach((element) => {
            let fila = `
            <tr>
                <td>${element.casa.nombre}</td>
                <td>${element.casa.compra}</td>
                <td>${element.casa.venta}</td>
            </tr>        
            `
            filas.push(fila)
        });
        document.getElementById("tbl_tbody").innerHTML = filas.join("")
    }
}