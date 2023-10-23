const { estudiantes } = require("./estudiantes");

const result = estudiantes.every(item => {
  return item.cursos.length >= 2;
})

console.log(result);