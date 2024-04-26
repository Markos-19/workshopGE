const usuario1 = 'user1';

const usuarios = {
    [usuario1]: {
        username: "usuario1",
        password: "contraseña1", 
        intentos: 0,
        blocked: false,}
    };

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
                             return {error:'CUENTA BLOQUEADA'};
                            }else {return {error: 'CONTRASEÑA INCORRECTA, INTENTE NUEVAMENTE'};
                        }
                        }
                    }
            } 
        }else {return {error:'USUARIO NO ENCONTRADO'}
    }
    }
