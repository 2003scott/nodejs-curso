export function sumar(a,b) {
    return a + b
}

export function restar(a,b) {
    return a - b
}

export function multiplicar(a,b) {
    return a * b
}

export function dividir(a,b) {
    return a / b
}

// module.exports = { //comonjs
//     sumar,
//     restar,
//     multiplicar,
//     dividir
// }

// console.log(sumar(10,20))
// console.log(restar(10,20))
// console.log(multiplicar(10,20))
// console.log(dividir(10,20))


export default {
    sumar,
    restar,
    multiplicar,
    dividir
}