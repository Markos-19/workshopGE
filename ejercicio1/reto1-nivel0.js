const usuarios = [
     {
        username: "usuario1",
        password: "contraseña1", 
        intentos: 0,
        blocked: false,
        balance: 2000},
     {
        username: "usuario2",
        password: "contraseña2",
        intentos: 0,
        blocked: false,
        balance: 2000}
    ]
//console.log('usuarios');

let usuario;
let usuario2;

function login(username, password) {
     usuario = usuarios.find((u) => u.username === username);
        if (usuario){
            if (!usuario.blocked){
                if(usuario.password === password){
                    usuario.intentos = 0;
                    return usuario;
                } else {
                    usuario. intentos++;{
                        if (usuario.intentos >= 3){
                            username.blocked = true;
                         return {error:'CUENTA BLOQUEADA'};
                        }else {return {error: 'CONTRASEÑA INCORRECTA, INTENTE NUEVAMENTE'};
                    }
                    }
                }
        } 
    }else {return {error:'USUARIO NO ENCONTRADO'}
}
}
//console.log(login("usuario1", "contraseña"))
//console.log(login("usuario1", "contraseña2"))
//console.log(login("usuario1", "contraseña3"))
//console.log(login("usuario1", "contraseña4"))

function depositar (usuario, monto) {
    usuario.balance += monto;
    return `DEPOSITO EXITOSO. SALDO ACTUAL ${usuario.balance}`;
}
//console.log(login("usuario1", "contraseña1"))
//console.log(depositar(usuario, 300))

function extraer (usuario, monto) {
    if (usuario.balance >= monto){
        usuario.balance -= monto;
        return `EXTRACCION EXITOSA. SALDO ACTUAL ${usuario.balance}`;
    }else{
        return `SALDO INSUFICIENTE`;
    }
}

//console.log(login("usuario1", "contraseña1"))
//console.log(extraer(usuario, 1500))


function transferencia (usuario, usuario2, monto) {
    if ( usuario.username =="usuario1") {
        usuario2 = usuarios[1]  //usuario2
        }
        else
        usuario2=usuarios[0]
    if (usuario.balance >= monto) {
        usuario.balance -= monto;
        usuario2.balance += monto;
        return `TRANSFERENCIA EXITOSA, SALDO ACTUAL ${usuario.username} ${usuario.balance}`;
    }else{
        return `SALDO INSUFICIENTE`;
    }
}

console.log(login("usuario1", "contraseña1"))
console.log(transferencia(usuario, usuario2, 200))
console.log(login("usuario2", "contraseña2"))


function menu () {
console.log('1. DEPOSITAR DINER0');
console.log('2.EXTRAER DINERO');
console.log('3.TRANSFERIR DINERO');
console.log('4. VER SALDO');
console.log('5.SALIR')
}