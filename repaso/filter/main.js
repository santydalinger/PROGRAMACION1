let helados=['Banana Split','Menta Granizada','Cereza','Dulce de leche','Granizado','Pistacho']

let arreglo_filtrado=helados.filter(element=>element.length>9)
console.log(arreglo_filtrado)

//Ejemplo2

let edades=[12,5,8,130,44]

function filtrar_por_edades(){
    return element>=10
}
let filtrado_de_edades=edades.filter(filtrar_por_edades)
console.log(filtrado_de_edades)