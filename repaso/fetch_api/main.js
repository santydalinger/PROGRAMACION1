function mostrar_objeto(){
    let cliente ={
        nombre:'Pepito',
        apellido:'Pozzo',
        dni:45734418,
        correo:{
            outlook:'superpepito@outlook.com',
            gmail:'pepito@gmail.com',
            yahoo:'elpepo@yahoo.com.ar'
        }   
        
            
    }
    //forma tradicional
    /*const outlook=cliente.correo.outlook
    const gmail=cliente.correo.gmail
    const yahoo=cliente.correo.yahoo*/
    
    //forma nueva: destructing objects
    const { outlook, gmail, yahoo }=cliente.correo

    console.log(`
        correo de pepito:


        outlook: ${outlook}
        gmail: ${gmail}
        yahoo: ${yahoo}
    `)


}
mostrar_objeto()

const consumir_api= async ()=>{
    //estamos realizando mediante a funcion nativa de js denomindada fetch, una solicitud HTTP a traves del metodo GET de manera de obtener las publicaciones de notacion JSON 
    
    const publicaciones= await fetch('https://jsonplaceholder.typicode.com/posts')
    const publicaciones_definitiva= await publicaciones.json()

    let items_totales=[]
    publicaciones_definitiva.forEach(element => {
        //console.log('Titulo: '+element.title)
        let item=`<li class="list-group-item">${element.title}</li>`
        items_totales.push(item)

    });
    document.getElementById("lista_publicaciones").innerHTML=items_totales.join('')
}
consumir_api()