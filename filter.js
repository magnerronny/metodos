// import { estudiantes } from "./estudiantes";

const { estudiantes } = require("./estudiantes");

const result = estudiantes.filter(item => item.genero == 'F')

console.log(result);
