const { estudiantes } = require("./estudiantes");

const result = estudiantes.map(item => {
  return {'fullName':`${item.f_nombre} ${item.l_nombre}`}
});

console.log(result);