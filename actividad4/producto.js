export default class Producto{
    constructor() { }
    async mostrar_dato_producto() {
        const producto = await fetch('https://fakestoreapi.com/products')
        const carta_producto = await producto.json()
        let columnas = []
        carta_producto.forEach((element) => {
            let columna=`
                <div class="col-lg-4">
                    <div class="card" style="width: 18rem;">
                        <img src="${element.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${element.title}</h5>
                            <p class="card-text">${element.description}</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            `
            columnas.push(columna)
        });
        document.getElementById("row1").innerHTML = columnas.join("")
    }
}