const arreglo  = [ '1', '2', '3', '4'];

const arregloCopy =  arreglo.slice(1 ,3);

console.log(arregloCopy);
console.log(arregloCopy === arreglo);

console.log(Array.isArray(arreglo));