//creamos un arreglo
let lenguajes=['Java','Python','JavaScript','C++','Visual Basic','Go']
//longitud de arreglo
let longitud=lenguajes.length
console.log('longitud del arreglo = '+longitud)

//Acceder al ultimo elemento del arreglo
let ultimo=lenguajes[longitud-1]

//recorremos un arreglo
lenguajes.forEach((element,index) => {
    console.log((index+1)+'-'+element)
});

//agregar un elemeno¿to al final del arreglo
lenguajes.push('Php')
console.log(lenguajes)

//eliminar el ultimo elemento del arreglo
lenguajes.pop()
console.log(lenguajes)

//como agregar un elemento al inicio del arreglo
lenguajes.unshift('C#')
console.log(lenguajes)

//como eliminar el primer elemento de un arreglo
lenguajes.shift()
console.log(lenguajes)