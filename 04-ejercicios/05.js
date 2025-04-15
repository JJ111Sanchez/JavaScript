/* 
*Crear un algoritmo que devuelva numero mayor y menor de un array

*Practicar este ejercicio ya que es realizado en pruebas de admision para trabajos 
de programacion
*/
/* 
let array = [10, -15, 20, 1, 55, -2];

function getMenorMayor(arr) {
    let menor = arr[0];
    let mayor = arr[0];
    for(numero of arr){
        menor = menor < numero ? menor : numero;
        mayor = mayor > numero ? mayor : numero;
    }
    return [menor, mayor];
}

let numeros = getMenorMayor(array)
console.log(numeros); */ 
/* 
let array = [ 12, 15, 190, -40, -36, 3, -114];

function obtMnorMyor(arr){
    let menor = [0];
    let mayor = [0];
    for(numero of arr){
        menor = menor < numero ? menor : numero;
        mayor = mayor > numero ? mayor : numero;
    }
    return[menor, mayor];
}

let resultado = obtMnorMyor(array);
console.log(resultado); */

//////////////////////////////////////////////////////////////////

/* let array = [10, 15, 152, 1, -99, -665];

function obtMayMen(arr){
    let mayor = [0];
    let menor = [0];   
    for(numero of arr){
        mayor = mayor > numero ? mayor : numero;
        menor = menor < numero ? menor : numero;        
    }
    return[mayor, menor];
}

let resultadoNumero = obtMayMen(array);
console.log(resultadoNumero); */

//////////////////////////////////////////////////////////////////

/* let array = [55, 80, 990, -663, -74];

function resulMenMay(arr){
    let numPvo = [0];
    let numNvo = [0];
    for(numero of arr){
        numPvo = numPvo > numero ? numPvo : numero;
        numNvo = numNvo < numero ? numNvo : numero;
    }
    return[numPvo, numNvo];
}

let hereIs = resulMenMay(array);
console.log(hereIs); */

//////////////////////////////////////////////////////////////////

/* let array = [50, 88, 500, -9954, 1477];

function candelaAzul(arr){
    let numMay = [0];
    let numMen = [0];
    for(numero of arr){
        numMay = numMay > numero ? numMay : numero;
        numMen = numMen < numero ? numMen : numero;
    }
    return[numMay, numMen];
}

let pipaDorada = candelaAzul(array);
console.log(pipaDorada); */

//////////////////////////////////////////////////////////////////

/* let array = [1, 0, 8, 9, 85, -3]

function menorMayor(arr){
    let numMenor = [0];
    let numMayor = [0];
    for(numero of arr){
        numMenor = numMenor < numero ? numMenor : numero;
        numMayor = numMayor > numero ? numMayor : numero;
    }
    return[numMenor, numMayor];
}

let resultado = menorMayor(array);
console.log(resultado); */

//////////////////////////////////////////////////////////////

/* let array = [5, 8, 9, 62, -99, 22 ,302]

function menorMayor(arr){
    let numMenor = [0];
    let numMayor = [0];
    for(numero of arr) {
        numMenor = numMenor < numero ? numMenor : numero;
        numMayor = numMayor > numero ? numMayor : numero;
    }
    return[numMenor, numMayor];
}

let resultado = menorMayor(array);
console.log(resultado); */

/////////////////////////////////////////////////////////

/* let array = [10, 122, 245, -43, -344]

function menorMayor(arr){
    let numMenor = [0];
    let numMayor = [0];
    for(numero of arr){
        numMenor = numMenor < numero ? numMenor : numero;
        numMayor = numMayor > numero ? numMayor : numero;
    }
    return[numMenor, numMayor];
}

let resultado = menorMayor(array);
console.log(resultado); */

/////////////////////////////////////////////////////////

/* let array = [55, 80 , 51 , 33 , -9, -5]

function menorMayor(arr){
    let numMenor = [0];
    let numMayor = [0];
    for(numero of arr){
        numMenor = numMenor < numero ? numMenor : numero;
        numMayor = numMayor > numero ? numMayor : numero;
    }
    return[numMenor, numMayor];
}

let resultado = menorMayor(array);
console.log(resultado);
 */

/////////////////////////////////////////////////////////

/* let array = [5, 8, 9, 45, -3,-558];

function imprimirMenorMayor(arr){
    let numMenor = [0];
    let numMayor = [0];
    for(numero of arr){
        numMenor = numMenor < numero ? numMenor : numero;
        numMayor = numMayor > numero ? numMayor : numero;
    }
    return [numMenor, numMayor];
}

let resultado = imprimirMenorMayor(array);
console.log(resultado); */

/////////////////////////////////////////////////////////

/* let array = [5, 8, -88 , 10, 55];

function imprimirMenorMayor(arr){
    let numMenor = [0];
    let numMayor = [0];
    for(numero of arr){
        numMenor = numMenor < numero ? numMenor : numero;
        numMayor = numMayor > numero ? numMayor : numero;
    }
    return [numMenor, numMayor];
}

let resultado = imprimirMenorMayor(array);
console.log(resultado); */

/////////////////////////////////////////////////////////

/* let array = [5, 12, 30, -95, 554, 1];

function imprimirMenorMayor(arr){
    let menor = [0];
    let mayor = [0];
    for(numero of arr){
        menor = menor < numero ? menor : numero;
        mayor = mayor > numero ? mayor : numero;
    }
    return [menor, mayor];
}

let resultado = imprimirMenorMayor(array);
console.log(resultado) */

/////////////////////////////////////////////////////////

let array = [25,55,93,744,-66,-45,1,2];

function imprimirMenMay(arr){
    let numMen = [0];
    let numMay = [0];
    for(numero of arr){
        numMen = numMen < numero ? numMen : numero;
        numMay = numMay > numero ? numMay : numero;
    }
    return [numMen, numMay];
}

let resultado = imprimirMenMay(array);
console.log(resultado);

