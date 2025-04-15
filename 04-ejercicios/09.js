/* 
*Crear algoritmo que tome un array de objetos y devuelva 
un array de pares
*/

let pairs = [
    [1, {name: "Sebastian"}],
    [2, {name: "Gustavo"}],
    [3, {name: "JhonJairo"}],
];

let array = [{
    id: 1,
    name: 'Sebastian',
}, {
    id: 2,
    name: 'Gustavo',
}, {
    id: 3,
    name: 'JhonJairo',
}];

function toColletion(arr){
    let colletion = [];
    for (idx in arr) {
        let elemento = arr[idx];
        colletion[idx] = elemento[1];
        colletion[idx].id = elemento[0];
    }

    return colletion;

}

let resultado = toColletion(pairs);
console.log(resultado);