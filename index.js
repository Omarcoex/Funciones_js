// const a = 3;
// const b = 4;

// // Funcion declarada
// function sumar() {
//   let a = 4;
//   let b = 4;
//   let suma = a + b;
//   console.log(suma);
// }
// sumar();

// // funcion expresada
// const sumar1 = function () {
//   let suma = a + b;
//   console.log(suma);
// };
// sumar1();
// // funcion arrow
// const sumar3 = (a, b) => {
//   let suma = a + b;
//   console.log(suma);
// };
// sumar3(3, 4);

let number = prompt("Git me to number");
function multiply() {
  for (let i = 0; i <= 9; i++) {
    document.write(`${number} x ${i} = ${number*i} <br>` ); 
}
}
multiply()