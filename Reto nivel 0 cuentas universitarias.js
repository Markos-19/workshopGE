let usuariosRegistrados = []
let programasDisponobles = {
    informatica:{cupos: 5, campus: {'Manchester': 3, 'Londres': 1, 'Liverpol': 1}},
    artes:{cupos: 5, campus: {'Manchester': 3, 'Londres': 1, 'Liverpol': 1}},
    marketing:{cupo : 5, campus: {'Manchester': 3, 'Londres': 1, 'Liverpol': 1}},
    medicina:{cupos: 5, campus: {'Manchester': 3, 'Londres': 1, 'Liverpol': 1}}
};

function login (usuario, contraseña) {
    let intentosFallidos = 0;

    function verificarCredenciales(){
        if (usuario === 'usuario' && contraseña === 'password'){
        return mostrarMenudeProgramas;
    }else {
        intentosFallidos++;
        if(intentosFallidos > 3){
            return SistemaBloqueado ();
        }else{
            console.log('CONTRASEÑA INCORRECTA' +(3 - intentosFallidos))
        }
    }
} 
    verificarCredenciales();
}


function mostrarMenudeProgramas (){
    console.log('Programas Disponibles')
    for (let programa in programasDisponibles)
    console.log(programa);
};


function registrarUsuariosNuevos (nombre, apellido, campus, programa) {
    if (
        programasDisponobles[programa] && 
        programasDisponibles[programa].cupos > 0 && 
        programasDisponible[programa].campus > 0
    ) {
    usuariosRegistrados.push({nombre, apellido, campus, programa});
    programasDisponibles[programa].cupos--;
    programasDisponible[programa].campus[campus]--;
    return 'USUARIO REGISTRADO CON EXITO';
}else{
    for (let prog in programasDisponobles){
        for (let camp in programasDisponobles[prog].campus){
            if (programasDisponobles[prog].campus[camp] > 0){
                return (prog + 'en' + camp);
            }
        }
    }
        return 'PROGRAMA NO DISPONIBLE'
    }
}


console.log(registrarUsuariosNuevos("marcos, gonzalez, Manchester, informatica"));