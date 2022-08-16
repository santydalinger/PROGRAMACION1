export default class Vehiculo{
    //estoy declarando el atributo marca
    marca=''
    constructor(km){
       this.km=km 
    }
    mostrar_km(){
        console.log(`
        kilometraje=${this.km}km
        `)
    }
    mostrar_marca(){
        console.log(`
        Marca del Vehiculo: ${this.marca}
        `)
    }
}