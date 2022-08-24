const obtener_usuario= async()=>{
    const users= await fetch('https://jsonplaceholder.typicode.com/users')
    const lista_usuarios=await users.json()
    let filas=[]
    lista_usuarios.forEach((element,index) => {
        let fila=`
            <tr>
                <td>${index+1}</td>
                <td>${element.name}</td>
                <td>${element.username}</td>
                <td>${element.email}</td>
                <td>${element.website}</td>
            </tr>        
        `
        filas.push(fila)
    });
    document.getElementById("tbl_tbody").innerHTML= filas.join("")
}
obtener_usuario()