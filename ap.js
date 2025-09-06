// =============================
// 1. FUNCIONES RECURSIVAS
// =============================

// Ejercicio 1: Factorial
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

// Ejercicio 2: Fibonacci
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

document.write("<h2>Funciones Recursivas</h2>");
document.write("Factorial de 5: " + factorial(5) + "<br>");
document.write("Fibonacci de 6: " + fibonacci(6) + "<br><br>");


// =============================
// 2. FUNCIONES PREDEFINIDAS
// =============================

let texto = "JavaScript es genial";
let numero = 9.876;

document.write("<h2>Funciones Predefinidas</h2>");
document.write("Texto en mayúsculas: " + texto.toUpperCase() + "<br>");
document.write("Texto en minúsculas: " + texto.toLowerCase() + "<br>");



// =============================
// 3. QUÉ ES UN ARREGLO
// =============================

let frutas = ["Manzana", "Banana", "Pera"];

document.write("<h2>Qué es un Arreglo</h2>");
document.write("Ejemplo de arreglo: " + frutas.join(", ") + "<br>");
document.write("Primer elemento: " + frutas[0] + "<br>");
document.write("Tamaño del arreglo: " + frutas.length + "<br><br>");


// =============================
// 4. FUNCIONES BÁSICAS CON ARREGLOS
// =============================

// Ejercicio 1: Agregar y eliminar elementos
let numeros = [1, 2, 3];
numeros.push(4);    // Agrega al final
numeros.unshift(0); // Agrega al inicio

document.write("<h2>Funciones Básicas con Arreglos</h2>");
document.write("Después de agregar elementos: " + numeros.join(", ") + "<br>");

numeros.pop();      // Quita último
numeros.shift();    // Quita primero

document.write("Después de eliminar elementos: " + numeros.join(", ") + "<br><br>");

// Ejercicio 2: Sumar todos los elementos
let lista = [5, 10, 15, 20];
let suma = lista.reduce((acc, num) => acc + num, 0);
document.write("Suma de [5,10,15,20]: " + suma + "<br>");

