const coins = {
    USD: 1,
    ARS: 864.750,
    CLP: 950.3734,
    EUR: 0.9341,
    GBP: 0.8001,
    TRY: 32.5684
}
//console.log(coins)
const limits = {
    USD: { min: 10, max: 1000},
    EUR: { min: 10, max: 1000},
    GBP: { min: 10, max: 1000},
    TRY: { min: 50, max: 5000},
    ARS: { min: 100, max: 1000000},
    CLP: { min: 1000, max: 10000000}
}
//console.log(limits)
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

//console.log(login("usuario1", "contraseña1"));

function userInput() {
    const monto = Number(prompt('INGRESE LA CANTIDAD DE DINERO A CONVERTIR:'));
    const monedaOrigen = prompt('INGRESE LA MONEDA DE ORIGEN(USD, EUR, GBP, TRY,ARS, CLP,):').toUpperCase();
    const monedaFinal = prompt('INGRESE LA MONEDA DE FINAL(USD, EUR, GBP, TRY,ARS, CLP,):').toUpperCase();
    const retirarFondos = prompt('¿DESEA RETIRAR LOS FONDOS? (Si/No)').toLowerCase()=== 'si';
    return {monto, monedaOrigen, monedaFinal, retirarFondos};
}

//console.log(userInput)

function conversionMonedas (monto, monedaOrigen, monedaFinal, retirarFondos) {
    const rate = coins[monedaFinal] / coins[monedaOrigen]
    const montoAconvertir = monto * rate
    let montoFinal = montoAconvertir;
    if (retirarFondos){
        const comision = montoAconvertir * 0.01;
        montoFinal = montoFinal - comision
    } return montoFinal;
}
//console.log(conversionMonedas(500, "USD", "ARS", "no"))

function limitesMontos (monto, moneda) {
    return monto >= limits[moneda].min && monto <=limits[moneda].max;
}
//console.log(limitesMontos(5000, "ARS"))

function convertidorMonedas () {
    let continuarOperacion = true
    while (continuarOperacion) {
        const {monto, monedaOrigen, monedaFinal, retirarFondos} = userInput();
        if (!limitesMontos(monto, monedaOrigen)){
            prompt(`LA CANTIDAD INGRESADA ESTA FUERA DE LOS LIMITES ${monedaOrigen}.`);
            continue
        }
        const result = conversionMonedas (monto, monedaOrigen, monedaFinal, retirarFondos)
        prompt (`CANTIDAD CONVERTIDA ${result.toFixed(2)}${monedaFinal}`);
        const otraOperacion = prompt (`¿DESEA REALIZAR OTRA OPERACION? (SI/NO)`).toLocaleLowerCase === "si";
        continuarOperacion = otraOperacion;
    }
    prompt(`GRACIAS POR UTILIZAR NUESTROS SERVICIOS`);
};

//console.log(convertidorMonedas)