let usuariosRegistrados = []
let programasDisponobles = {
    informatica:[cupos : 5, campus {'Manchester':3, 'Londres': 1, 'Liverpol':1}],
    artes:[cupos : 5, campus {'Manchester':3, 'Londres': 1, 'Liverpol':1}],
    marketing:[cupos : 5, campus {'Manchester':3, 'Londres': 1, 'Liverpol':1}],
    medicina:[cupos : 5, campus {'Manchester':3, 'Londres': 1, 'Liverpol':1}],
};

function login (usuario, contraseña) {
    let intentosFallidos = 0;

    function verificarCredenciales(){
        if (usuario === 'usuario' && contraseñña === 'password'){
        return mostrarMenudeProgramas;
    }else {
        intentosFallidos++;
        if(intentosFallidos >= 3){
            return SistemaBloqueado ();
        }else{
            console.log('CONTRASEÑA INCORRECTA' +(3 -intentosFallidos))
        }
    }
} verificarCredenciales();
}