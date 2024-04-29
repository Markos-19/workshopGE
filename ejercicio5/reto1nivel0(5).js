let informacionFinanciera = {
    ingresos: 0,
    gastos:{
        hogar: [],
        medicos: [],
        ocio: [],
        ahorros: [],
        educacion: []
    },
};

function nuevoIngreso  (monto) {
     informacionFinanciera.ingresos += monto;
     return informacionFinanciera.ingresos;
    }
console.log(nuevoIngreso(500))

function registrarGastos (category, monto) {
   
    informacionFinanciera.gastos[category] = (informacionFinanciera.gastos[category] || 0);
    informacionFinanciera.gastos[category] += monto;    
    return informacionFinanciera.gastos[category];
};
console.log(registrarGastos("ocio", 500))
console.log(registrarGastos("ocio", 500))

function gastosCategorias (){
    let gastosCategorias = 0;
    for (let category in informacionFinanciera.gastos){
        gastosCategorias += informacionFinanciera.gastos.category;
    } return gastosCategorias
};

console.log(gastosCategorias)

function chequeoEstadoFinanciero () {
    let totalIngresos = informacionFinanciera.ingresos;
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
console.log(registrarGastos("ocio", 500));
console.log(registrarGastos("ahorro", 500))