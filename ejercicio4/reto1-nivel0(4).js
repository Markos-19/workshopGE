const usuarios = 
[
     {
        username: "usuario1",
        password: "contraseña1", 
        intentos: 0,
        blocked: false,}
     ];

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

// console.log(login("usuario1", "contraseña1"));

class Paquete {
    cosnt (remitente, destinatario, peso){
        this.numeroDePaquete = Math.floor(Math.random() * 9000) + 1000;
        this.remittente = remitente;
        this.destinatario = destinatario;
        this.peso = peso;
        this.precioEnvio = peso * 2;
    }
};

function enviarPaquete(usuario) {
    if(!usuario){
      return  alert(`INICIE SESION PARA ENVIAR UN PAQUETE`)
    }
    let remitente = prompt ('Ingrese el nombre del remitente');
    let destinatario = prompt('Ingrese el nombre del destinatario');
    let peso= parseFloat(prompt('Ingrese el peso del paquete'));
    let paquete = new Paquete(remitente, destinatario, peso)
    {
    console.log(`Paquete enviado con exito.
    Numero de paquete: ${paquete.numeroDePaquete}
    Precio de envio: $${paquete.precioEnvio}`)
};

function ejecutarSistema() {
    const usuarioIngresado = prompt('Ingrese su nombre de usuario:');
    const contraseñaIngresada = prompt('Ingrese su contraseña');
    const resultadoLogin = login (usuarioIngresado, contraseñaIngresada);
    if (resultadoLogin.error) {
        alert(resultadoLogin.error);
        return;
      }
      alert (`Bienvenido, ${resultadoLogin.username}!`);
      while (true) {
        const opcion = prompt("- Menú -\n1. Enviar un paquete\n2. Salir del sistema\nSeleccione una opción:");
        if (opcion === "1") {
          enviarPaquete(resultadoLogin);
        } else if (opcion === "2") {
          alert("Saliendo del sistema.");
          break;
        } else {
          alert("Opción no válida. Por favor, seleccione nuevamente.");
        }
      }
    }
  }
