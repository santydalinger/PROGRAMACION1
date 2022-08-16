export default class Cliente{
    constructor(nombre,apellido,dni){
        this.nombre=nombre
        this.apellido=apellido
        this.dni=dni
    }
    mostrar_dato_personales(){
        console.log(`
        nombre=${this.nombre}
        `)
        console.log(`
        apellido=${this.apellido}
        `)
        console.log(`
        dni=${this.dni}
        `)
    }
    
}