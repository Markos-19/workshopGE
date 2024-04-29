let informacionFinaciera = {
    ingresos: 0,
    gastos:{
        hogar: [],
        medicos: [],
        ocio: [],
        ahorros: [],
        educacion: []
    },
};

function nuevoIngreso  (ingresos, monto) {
     const entrada = ingresos + monto;
     return nuevoIngreso
    };
//console.log(nuevoIngreso(0, 500))

function registrarGastos (categorias, monto) {
    informacionFinaciera.gastos[categorias] += monto;
}

//console.log(registrarGastos("ocio", 500))

function gastosCategorias (){
    let gastosCategorias = 0;
    for (let categorias in informacionFinaciera.gastos){
        gastosCategorias += informacionFinaciera.gastos.categorias;
    } return gastosCategorias
};

//console.log(gastosCategorias)

function chequeoEstadoFinanciero () {
    let totalIngresos = informacionFinaciera.ingresos;
    let totalGastos = gastosCategorias();

        if (totalGastos === totalIngresos) {
            alert ('SUS INGRESOS HAN SIDO GASTADOS. POR FAVOR REDUZCA SUS GASTOS.');
        }else if(totalGastos < totalIngresos){
            alert ('FELICITACIONES!! HA GASTADO MENOS QUE SUS INGRESOS.');
        } else {
            alert ('DEBERIA INTENTAR REDUCIR SUS GASTOS EN'[categorias]);
        }
    }
console.log(nuevoIngreso(2000));
console.log(registrarGastos("medicos", 500));
console.log(registrarGastos("ocio", 1500));
console.log(registrarGastos("ahorro", 500));
console.log(chequeoEstadoFinanciero)