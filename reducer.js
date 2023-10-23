const { estudiantes } = require("./estudiantes");


const result = estudiantes.reduce((acumulador, student) => {
  acumulador += student.pago;
  return acumulador;
}, 0)

console.log(result);