//short-circuit

// Falso
// false
// 0
// ''
// null
// undefined
// NaN

let nombre = 'elMismo';
let username = nombre || 'Anonimo';
console.log(username);

function fn1() {
    console.log('Soy la Funcion 1');
    return false;
}

function fn2() {
    console.log('Soy la Funcion 2');
    return true;
}

let x = fn1() && fn2();
