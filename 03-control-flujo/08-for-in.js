let user = {
    id: 1,
    name: 'Tigre Leon Pantera',
    age: 30,
};

for (let prop in user) {
    console.log(prop, user[prop]);
};

let animales = ['Tigre', 'Leon', 'Pantera'];
for (let indice in animales) {
    console.log(indice, animales[indice]);
};