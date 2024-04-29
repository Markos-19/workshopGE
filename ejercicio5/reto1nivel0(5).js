let informacionFinanciera = {
    ingresos: 0,
    gastos: {
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
//console.log(nuevoIngreso(500))
//console.log(nuevoIngreso(500))

function registrarGastos(category, monto) {
    informacionFinanciera.gastos[category] =
      Number(informacionFinanciera.gastos[category]) || 0;
    informacionFinanciera.gastos[category] += monto;
    return informacionFinanciera.gastos[category];
  }
//console.log(registrarGastos("ocio", 500))
//console.log(registrarGastos("ocio", 500))
//console.log(registrarGastos("ahorro", 500))
//console.log(registrarGastos("ahorro", 1500))

function gastosCategorias (){
    let gastosCategorias = 0;
    for (let category in informacionFinanciera.gastos){
        gastosCategorias += Number (informacionFinanciera.gastos[category]);
    } return gastosCategorias
};

//console.log(gastosCategorias())

function chequeoEstadoFinanciero () {
    let totalIngresos = informacionFinanciera.ingresos;
    let totalGastos = gastosCategorias();
    let categoriaMasGastos = '';
    let maxGastos = 0;

    for (let category in informacionFinanciera.gastos) {
        if (informacionFinanciera.gastos.hasOwnProperty(category)) {
            if (informacionFinanciera.gastos[category] > maxGastos) {
                maxGastos = informacionFinanciera.gastos[category];
                categoriaMasGastos = category;
            }
        }
    }        
        if (totalGastos === totalIngresos) {
            return (`SUS INGRESOS HAN SIDO GASTADOS. POR FAVOR REDUZCA SUS GASTOS.`);
        }else if(totalGastos < totalIngresos){
            return (`FELICITACIONES!! HA GASTADO MENOS QUE SUS INGRESOS.`);
        } else {
            return (`DEBERIA INTENTAR REDUCIR SUS GASTOS EN ${categoriaMasGastos}`);
        }
    }
/*console.log(nuevoIngreso(6000));
console.log(nuevoIngreso(1000));
console.log(nuevoIngreso(2000))
console.log(registrarGastos("medicos", 500));
console.log(registrarGastos("ocio", 2500));
console.log(gastosCategorias(""))
console.log(chequeoEstadoFinanciero())*/