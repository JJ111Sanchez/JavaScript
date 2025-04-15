function crearUsuario(name, email){
    return {
        email,
        name,
        activo: true,
        recuperarClave: function () {
            console.log('Recuperando Clave...');
        },
    };
}

let user1 = crearUsuario('JhonJairo', 'jj@gmail.com');
let user2 = crearUsuario('Gustavo', 'gtv@gmail.com');

console.log(user1, user2);