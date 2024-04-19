const usuarios = {
    [username: "usuario1",
     password: "contraseña1", 
     intentos: 0,
     blocked: false,
     balance: 2000],
    [username: "usuario2",
     password: "contraseña2",
     intentos: 0,
     blocked: false,
     balance: 2000]
}
//console.log('usuarios');

function login(username, password){
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