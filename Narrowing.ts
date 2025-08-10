function mostrarLongitud (objeto: number | string) {
   if (typeof objeto == 'string'){
    return objeto.length
   }
   return objeto.toString().length
}

mostrarLongitud('1')

interface Mario {
    company: 'nintendo',
    nombre: string,
    saltar: () => void
}

interface Sonic {
    company:  'Sega',
    nombre: string,
    correr: () => void
}

type Personaje = Mario | Sonic

//Type Guard
//esta función detrmina si es sonic o no
function checkSonic(personaje: Personaje): personaje is Sonic {
    return (personaje as Sonic).correr != undefined
}
// SE DEBE EVITAR
function jugar(personaje: Personaje) {
   if (checkSonic(personaje)){
    personaje.correr()
    return
   } else{
    personaje.saltar()
    return
   }
   personaje
}

function fn(x: string | number) {
    if (typeof x == 'string'){
        //do something
    } else if (typeof x == 'number') {
        //
    } else{
        x
    }
}