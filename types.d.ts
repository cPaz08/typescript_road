export interface IAvenger {
    name: string // solo lectura
    powerScore: number // privada
    wonBattles: number
    age: number // por defecto
    hijos: number //no puedes acceder en instancias de la clase, pero si en clases que estan heredando

}