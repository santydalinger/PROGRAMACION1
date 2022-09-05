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

//agregar un elemento al final del arreglo
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

//como encontrar el indice de un elemento y mostrarlo posteriormente
let indice=lenguajes.indexOf('JavaScript')
console.log(lenguajes[indice])

//como eliminar un elemento de un arreglo segun su indice
let indice2=lenguajes.indexOf('C++')
let deleteados=lenguajes.splice(indice2,2)
console.log(lenguajes)
console.log(deleteados)

//como agrego elementos de un arreglo
lenguajes.splice(indice+1,0,'Visual Basic')
console.log(lenguajes)

//como copiar un arreglo
let copia=lenguajes.slice()
copia.push('Ruby')
console.log(copia)
