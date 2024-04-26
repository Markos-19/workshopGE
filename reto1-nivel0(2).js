const usuarios = [
    {
       username: "usuario1",
       password: "contraseña1", 
       intentos: 0,
       blocked: false,
       nombre: "Marcos",
       apellido: "Gonzalez",
       programa: ""
       },
    {
       username: "usuario2",
       password: "contraseña2",
       intentos: 0,
       blocked: false,
       nombre: "Giovanni",
       apellido: "Gonzalez",
       programa:""
       },
       {
       username: "usuario3",
       password: "contraseña3", 
       intentos: 0,
       blocked: false,
       nombre: "Rocio",
       apellido: "Cabral",
       programa:""
       },
       {
        username: "usuario4",
       password: "contraseña4", 
       intentos: 0,
       blocked: false,
       nombre: "Thiago",
       apellido: "Gonzalez",
       programa:""
              }
   ]
   
//console.log(usuarios)


let usuario;
let usuario2;

let programasDisponibles = {
    informatica:{cupos: 5,  campus: {'Manchester': 3, 'Londres': 1, 'Liverpol': 1}},
    artes:{cupos: 5, campus: {'Manchester': 3, 'Londres': 1, 'Liverpol': 1}},
    marketing:{cupos: 5, campus: {'Manchester': 3, 'Londres': 1, 'Liverpol': 1}},
    medicina:{cupos: 5, campus: {'Manchester': 3, 'Londres': 1, 'Liverpol': 1}}
};


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
};

function eleccionPrograma(usuario, programa, campus){
    if(usuario ){   
        if(programasDisponibles[programa]!==undefined && programasDisponibles[programa].campus[campus]!==undefined){
        let cuposDisponibles = programasDisponibles[programa].campus[campus];
                if(cuposDisponibles > 0) {
                programasDisponibles[programa].campus[campus]--;
                programasDisponibles[programa].cupos--;
                const indiceUsuario= usuarios.findIndex((u) => u.username === usuario.username);
                  usuarios[indiceUsuario].programa =programa;
                return `CUPO RESERVADO EXITOSO`;
            } else {
                return `NO HAY CUPOS DISPONIBLES EN EL CAMPUS SELECCIONADO`;
            }
         } else {
                return  `PROGRAMA O CAMPUS NO ENCONTRADO`;
            } 
        }else {
                return `DEBE INICIAR SESION PARA ADQUIRIR UN CUPO`;
            }
        } 
      
    
console.log(login("usuario1", "contraseña1"))
console.log(eleccionPrograma(usuario,"informatica", "Manchester"));
console.log(login("usuario2", "contraseña2"))
console.log(eleccionPrograma(usuario,"informatica", "Manchester"));
console.log(login("usuario3", "contraseña3"))
console.log(eleccionPrograma(usuario,"informatica", "Manchester"));
console.log(login("usuario4", "contraseña4"))
console.log(eleccionPrograma(usuario,"informatica", "Manchester"));
console.log(login("usuario3", "contraseña3"));
console.log(login("usuario1", "contraseña1"))
git

