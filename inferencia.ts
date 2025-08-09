// function saludar(persona: {name: string, age:number}) {
//     const {name, age} = persona
//     console.log(`Hola ${name}, tienes ${age} años`)
// }

// saludar({name: 'Pepe', age: 11 })

// function saludar({ name, age}: {name: string, age:number}) {
//     console.log(`Hola ${name}, tienes ${age} años`)
//     return age
// }

// const sayHiFromFuntion = (fn) =>{
//     return fn('Miguel')
// }

// sayHiFromFuntion((name) => {
//     console.log(`Hola ${name}`) 
// })

// const sayHiFromFuntion = (fn: (name: string) => void) => {
//     fn('Miguel')
// }

// const sayHi = (name: string) => {
//     console.log(`Hola ${name}`)
// }

// sayHiFromFuntion(sayHi)


//Tipar las arrow funtions
// const sumar = (a: number, b: number): number => {
//     return a + b
// }

// const restar: (a: number, b: number) => number = (a, b) => {
//     return a - b
// }

// never
// function trowError(message: string): never {
//     throw new Error(message)
// }

// function logMessage(message: string): void {
//     console.log(message)
// }

// inferencia funciones anonimas según el contexto
// const avengers = ['Spidey', 'hulk', 'IronMan']

// avengers.forEach(function (avenger) {
//     console.log(avenger.toUpperCase())
// })

//Objetos

// let hero = {
//     name: 'thor',
//     age: 1500
// }

// function createHero(name: string, age:number) {
//     return {
//         name, age
//     }
// }

// const thor = createHero('Thor', 1500)

//Type Alias
// type Hero = {
//     name: string,
//     age:number
// }

// let hero: Hero = {
//     name: 'thor',
//     age: 1500
// }

// function createHero(hero: Hero): Hero {
//     const {name, age} = hero
//     return {name, age}
// }

// const thor = createHero({name: 'Thor', age: 1500})

//Optional properties
type HeroId = `${string}-${string}-${string}-${string}-${string}`
type Hero = {
    readonly id?: HeroId
    name: string
    age:number
    isActive?: boolean
}

let hero: Hero = {
    name: 'thor',
    age: 1500
}

function createHero(hero: Hero): Hero {
    const {name, age} = hero
    return {
        id: crypto.randomUUID(), 
        name, 
        age, isActive: true}
}

const thor = createHero({name: 'Thor', age: 1500})
// console.log(thor.isActive) //--> true

thor.id?.toString()//cosulta en una línea

// thor.id = 423542654745634123

// template union types

type HexadecimalColor = `#${string}`

const color: HexadecimalColor = '003FFF'
const color2: HexadecimalColor = '#0033FF'