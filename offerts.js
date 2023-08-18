/* -------------------------------------------------- */
/* --------------  Offerts Bussines  ---------------- */
/* -------------------------------------------------- */

/* Es necesario instalar este modulo */
const pedirImput = require('readline-sync')

const validarNum = (dato, valMax, msj) => {
    while (!(dato > 0 && dato <= valMax)){
        dato = Number(pedirImput.question(`Enter the ${msj}: `))
    }
    return dato
}

let target = Number(pedirImput.question('Enter the target: '))
target = validarNum(target, 100000, 'target')
let maxArrayLeng = Number(pedirImput.question('Enter the project cost Size: '))
/* maxArrayLeng = validarNum(maxArrayLeng, 2000000000, 'project cost Size') */
let contadorPares = 0

/* nuevoArray = [0,2,3,5,4,9,15] */
nuevoArray = []

while (nuevoArray.length < maxArrayLeng){
    valueRamd = Math.floor(Math.random() * 2000000000)
    if (!(nuevoArray.includes(valueRamd))) {
        nuevoArray.push(valueRamd)
    }
}

for (let i = 0; i < nuevoArray.length; i++) {
    for (let e = 0; e < nuevoArray.length; e++) {
        if (nuevoArray[i] + target == nuevoArray[e]){
            contadorPares++
        }
    }
}

console.log(nuevoArray)
console.log(contadorPares)


/* -------------------------------------------------- */
/* -----  Creado por: William Villamizar Garcés  ---- */
/* -------------------------------------------------- */
