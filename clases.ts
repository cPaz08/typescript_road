// se puede hacer una interfas que implemente una clase
// interface Avenger {
//     readonly name: string // solo lectura
//     #powerScore: number // privada
//     wonBattles: number = 0
//     public age: number // por defecto
//     protected hijos: number //no puedes acceder en instancias de la clase, pero si en clases que estan heredando

// }
import { type IAvenger } from "./types"
// class Avenger implements Avenger {
class Avenger implements IAvenger{
    // readonly name: string // solo lectura
    // #powerScore: number // privada
    // wonBattles: number = 0
    // public age: number // por defecto
    // protected hijos: number //no puedes acceder en instancias de la clase, pero si en clases que estan heredando
    name: string // solo lectura
    powerScore: number // privada
    wonBattles: number
    age: number // por defecto
    hijos: number //no puedes acceder en instancias de la clase, pero si en clases que estan heredando

    constructor(name: string, powerScore: number) {
        this.name = name
        this.powerScore = powerScore
    }

    get fullName() {
        return `${this.name}, de poder ${this.powerScore}`
    }

    set power(newPower: number) {
        if (newPower <= 100) {
            this.powerScore = newPower
        } else {
            throw new Error('Power score cannot be more than 100')
        }
    }
}

const avengers = new Avenger('Spidey', 80)
avengers.age