const { estudiantes } = require("./estudiantes");

const result = estudiantes.find(item => item.edad < 30);

console.log(result);