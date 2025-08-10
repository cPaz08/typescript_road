interface Producto {
    id: number
    nombre: string
    precio: number
    quantity: number
}

interface Zapatilla extends Producto{
    talla: number
}

interface CarritoDeCompras {
    totalPrice: number
    productos: Zapatilla[]
}

// interface CarritoOps {
//     add: (product: Producto) => void,
//     remove: (id: number) => void,
//     cleaar: () => void
// }

interface CarritoOps {
    add(product: Producto): void,
    remove(id: number): void,
}
interface CarritoOps {
    clear(): void
}

const ops: CarritoOps = {
    add: (product: Producto) => {},
    remove: (id: number) => {},
    clear: () => {}
}

const carrio: CarritoDeCompras = {
    totalPrice: 100,
    productos: [
        {
            id: 1,
            nombre: 'Producto 1',
            precio: 100,
            quantity: 5,
            talla: 42
        }
    ]
}

type HeroId = `${string}-${string}-${string}-${string}-${string}` // esto solo se puede hacer con tipos