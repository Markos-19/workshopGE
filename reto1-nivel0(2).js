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
    if(usuario){
        if(programasDisponibles[programa] && programasDisponibles[programa].campus[campus]){
        let cuposDisponibles = programasDisponibles[programa].campus[campus];
                if(cuposDisponibles > 0) {
                programasDisponibles[programa].campus[campus]--;
                programasDisponibles[programa].cupos--;
                usuario.programa = "programa";
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
console.log(eleccionPrograma("usuario1","informatica", "Manchester"));
console.log(login("usuario2", "contraseña2"))
console.log(eleccionPrograma("usuario2","informatica", "Manchester"));
console.log(login("usuario3", "contraseña3"))
console.log(eleccionPrograma("usuario1","informatica", "Manchester"));
console.log(login("usuario4", "contraseña4"))
console.log(eleccionPrograma("usuario4","informatica", "Manchester"))
console.log(login("usuario1", "contraseña1"));


/*function registrarUsuariosNuevos (nombre, apellido, campus, programa) {
    if (
        programasDisponibles[programa] && 
        programasDisponibles[programa].cupos > 0 && 
        programasDisponible[programa].campus > 0
    ) {
    usuariosRegistrados.push({nombre, apellido, campus, programa});
    programasDisponibles[programa].cupos--;
    programasDisponible[programa].campus[campus]--;
    return 'USUARIO REGISTRADO CON EXITO';
}else{
    for (let prog in programasDisponibles){
        for (let camp in programasDisponibles[prog].campus){
            if (programasDisponibles[prog].campus[camp] > 0){
                return (prog + 'en' + camp);
            }
        }
    }
        return 'PROGRAMA NO DISPONIBLE'
    }
}


console.log(registrarUsuariosNuevos("marcos, gonzalez, Manchester, informatica"));
console.log(registrarUsuariosNuevos("marcos, gonzalez, Manchester, informatica"))*/