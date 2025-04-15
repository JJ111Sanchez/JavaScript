let obj = {};
let obj1 = new Object();

/* new Array(); []
new String(); "" ó ''
new Number(); 12
new Boolean(); true ó false */

function Usuario() {
    this.name = "Monito Lindo";
}
let user = new Usuario();
console.log(user.constructor);

const s1 = "1 + 1";
const s2 = new String("1 + 1");
console.log(s2.valueOf());

