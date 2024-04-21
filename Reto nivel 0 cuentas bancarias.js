const usuarios = {
    [username: "usuario1",
     password: "contraseña1", 
     intentos: 0,
     blocked: false,
     balance: 2000]
    [username: "usuario2",
     password: "contraseña2",
     intentos: 0,
     blocked: false,
     balance: 2000]
}
//console.log('usuarios');

function login(username, password) {
    const usuario = usuarios.find(u => u.usuario === usuario);
        if (usuario){
            if (!usuario.blocked){
                if(usuario.password === password){
                    usuario.intentos = 0;
                    return usuario
                } else {
                    usuario. intentos++;{
                        if (usuario.intentos >= 3){
                            username.blocked = true;
                         return [error: 'CUENTA BLOQUEADA'];
                        }else {return [error: 'CONTRASEÑA INCORRECTA, INTENTE NUEVAMENTE'];
                        }
                    }
                }
        }else {return [error: 'USUARIO NO ENCONTRADO']
}
}
//console.log(login(usuario1, contraseña1))

function depositar (usuario, monto) {
    usuario.balance += monto;
    return 'DEPOSITO EXITOSO. SALDO ACTUAL [usuario.balance]';
}


function extraer (usuario, monto) {
    if (usuario.balance >= monto){
        usuario.balance -= monto;
        return 'EXTRACCION EXITOSA. SALDO ACTUAL [usuario.balance]';
    }else{
        return 'SALDO INSUFICIENTE';
    }
};

function transferencia (usuario1, usuario2, monto) {
    if (usuario1.balance >= monto) {
        usuario1.balance -= monto;
        usuario2.balance += monto;
        return 'TRANSFERENCIA EXITOSA, SALDO ACTUAL USUARIO1[usuario1.balance]';
    }else{
        return 'SALDO INSUFICIENTE';
    }
}

function menu (){
console.log('1. DEPOSITAR DINER0');
console.log('2.EXTRAER DINERO');
console.log('3.TRANSFERIR DINERO');
console.log('4. VER SALDO');
console.log('5.SALIR')
};