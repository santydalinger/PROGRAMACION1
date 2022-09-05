let criptos = ['Bitcoin', 'Ethereum', 'Tether', 'BNB' , 'Cardano', 'Dai' , 'Helium', 'Shiba Inu' , 'Tron' , 'Cronos','Solana']

//agrego el elemento 'Stellar' al inicio
criptos.unshift('Stellar')
console.log(criptos)

//elimino la cripto 'Shiba Inu' y 'Tron'
let indice=criptos.indexOf('Shiba Inu')
criptos.splice(indice,2)
console.log(criptos)

//agrego la cripto 'Gate' al final del arreglo
criptos.push('Gate')
console.log(criptos)

//creo la funcion para imprimir datos
function mostrar_datos_arreglos(){
    let longitud=criptos.length
    let ultimo_elemento=criptos[longitud-1]
    let indice2=criptos.indexOf('Helium')
    document.getElementById("h1").innerHTML=(`
        la longitud es: ${longitud}<br>
        el ultimo elemento es: ${ultimo_elemento}<br>
        ${criptos[indice2]}<br>
        
    `)
    
}
document.getElementById("btn_mostrar_dato").addEventListener("click",mostrar_datos_arreglos)

function mostrar_lista_cripto(){
    let filas=[]
    criptos.forEach((element,indice) => {
        let fila=`
            <li class="list-group-item">${element}</li>
        `
        filas.push(fila)
    });
    document.getElementById("lista_criptos").innerHTML=filas.join('')
}
document.getElementById("btn_crear_lista").addEventListener("click",mostrar_lista_cripto)