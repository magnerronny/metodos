const { estudiantes } = require("./estudiantes");

const result = estudiantes.some(estudiante => estudiante.edad > 30);
console.log(result);