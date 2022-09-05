const mostrar_objeto=()=>{
    const framework = {
        titulo: 'Framework utilizado en la actualidad',
        nombre: 'Angular',
        características: {
         lenguaje: 'TypeScript',
         patron: 'MVVM',
         spa: 'si'
        },
    }
    const{titulo,nombre}=framework
    const{lenguaje,patron,spa}=framework.características
    console.log(`
        el titulo es: ${titulo}
        el nombre es: ${nombre}
        las caracteristicas son:
        lenguaje: ${lenguaje}
        patron: ${patron}
        spa: ${spa}
    
    `)
}
document.getElementById("btn_mostrar_objeto").addEventListener("click",mostrar_objeto)