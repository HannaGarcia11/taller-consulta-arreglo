// Taller de Investigación sobre Arreglos en JavaScript
// Nombre del estudiante: [Hanna Garcia Guerra]

// Parte 2: El Universo de los Arreglos

// Investigación #3: Fundamentos de los Arreglos
// 1. Define qué es un arreglo en JavaScript.
/**
 * Escribe tu explicación aquí:
 * Un arreglo es una estructura de datos que permite almacenar múltiples valores en una sola variable. Los valores se organizan en una lista ordenada y se accede a ellos mediante índices numéricos, comenzando desde 0. Los arreglos pueden contener elementos de diferentes tipos de datos, como números, cadenas, objetos, e incluso otros arreglos.
 */

// 2. Explica para qué se utilizan los arreglos en el desarrollo de software.
/**
 * Escribe tu explicación aquí:
 * Los arreglos se utilizan para organizar y gestionar colecciones de datos relacionados, facilitando operaciones como almacenamiento, acceso, manipulación y recorrido de esos datos. Son fundamentales para manejar listas de elementos, como usuarios, productos o cualquier conjunto de datos que necesite ser procesado en conjunto.
 */

// 3. Crea un ejemplo de un arreglo que contenga múltiples tipos de datos.
// let arregloMixto = [42, "Hola", true, { nombre: "Juan", edad: 30 }, [1, 2, 3]];


// Muestra el arreglo `arregloMixto` en la consola.
// console.log("Arreglo mixto:", arregloMixto);



// Investigación #4: Métodos Mutables (Mutable Methods)
// 1. Define qué es un método mutable.
/**
 * Escribe tu explicación aquí:
 * Un método mutable es aquel que modifica el arreglo original sobre el cual se aplica, cambiando su contenido, longitud o estructura. Estos métodos alteran directamente el arreglo en lugar de crear una copia o un nuevo arreglo.
 */

// 2. Investiga y aplica 8 métodos de arreglos que sean mutables.
console.log("--- MÉTODOS MUTABLES ---");

// Método 1: [push(elemento)]
// Descripción: Agrega uno o más elementos al final del arreglo y devuelve la nueva longitud del arreglo.
// Ejemplo: 
let frutas = ["manzana", "banana"];
frutas.push("naranja");
console.log("Después de push:", frutas); // ["manzana", "banana", "naranja"]


// Método 2: [pop()]
// Descripción: Elimina el último elemento del arreglo y lo devuelve.
// Ejemplo:
let numeros = [1, 2, 3, 4];
let ultimo = numeros.pop();
console.log(numeros); // [1, 2, 3]
console.log("Elemento eliminado con pop:", ultimo); // 4


// Método 3: [shift()]
// Descripción: Elimina el primer elemento del arreglo y lo devuelve.
// Ejemplo:
let colores = ["rojo", "verde", "azul"];
let primero = colores.shift();
console.log(colores); // ["verde", "azul"]
console.log("Elemento eliminado con shift:", primero); // "rojo"


// Método 4: [unshift(elemento)]
// Descripción: Agreaga uno o más elementos al inicio del arreglo y devuelve la nueva longitud del arreglo.
// Ejemplo:
let animales = ["gato", "perro"];
animales.unshift("pez");
console.log(animales); // ["pez", "gato", "perro"]


// Método 5: [splice()]
// Descripción: Agrega, elimina o reemplaza elementos en cualquier posición del arreglo.
// Ejemplo:
let letras = ["a", "b", "d"];
letras.splice(2, 0, "c"); // Agrega "c" en la posición 2
console.log(letras); // ["a", "b", "c", "d"]


// Método 6: [sort()]
// Descripción: Ordena los elementos del arreglo en su lugar y devuelve el arreglo ordenado.
// Ejemplo:
let numerosDesordenados = [3, 1, 4, 2];
numerosDesordenados.sort();
console.log(numerosDesordenados); // [1, 2, 3, 4]


// Método 7: [reverse()]
// Descripción: Invierte el orden de los elementos del arreglo en su lugar.
// Ejemplo:
let orden = [1, 2, 3, 4];
orden.reverse();
console.log(orden); // [4, 3, 2, 1]

// Método 8: [fill(valor, inicio, fin)]
// Descripción: Rellena los elementos del arreglo con un valor estático desde el índice de inicio hasta el índice de fin.
// Ejemplo:
let arrayVacio = new Array(5); // Crea un arreglo de longitud 5
arrayVacio.fill(0, 0, 5); // Rellena todo el arreglo con 0
console.log(arrayVacio); // [0, 0, 0, 0, 0]



// Investigación #5: Métodos Inmutables (Immutable Methods)
// 1. Define qué es un método inmutable y por qué son importantes.
/**
 * Escribe tu explicación aquí:
 * Un método inmutable es aquel que no modifica el arreglo original, sino que crea y devuelve un nuevo arreglo con los cambios aplicados. Son importantes porque permiten mantener la integridad de los datos originales, facilitando la gestión del estado en aplicaciones, especialmente en programación funcional y en entornos donde la inmutabilidad es crucial, como en React.
 */

// 2. Investiga y aplica 5 métodos de arreglos que sean inmutables.
console.log("\n--- MÉTODOS INMUTABLES ---");

// Método 1: [concat()]
// Descripción: Une dos o más arreglos y devuelve un nuevo arreglo sin modificar los originales.
// Ejemplo:
let frutass = ["Manzana", "Banano"];
let citricos = ["Naranja", "Limón"];

let resultado = frutass.concat(citricos);
console.log(resultado); // ["Manzana", "Banano", "Naranja", "Limón"]
console.log(frutass);


// Método 2: [map()]
// Descripción: Crea un nuevo arreglo con los resultados de aplicar una función a cada elemento del arreglo original.
// Ejemplo:
let numeross = [1, 2, 3, 4];
let cuadrados = numeross.map(num => num * num);
console.log(cuadrados); // [1, 4, 9, 16]
console.log(numeross); // [1, 2, 3, 4]


// Método 3: [filter()]
// Descripción: Crea un nuevo arreglo con todos los elementos que cumplan una condición especificada en una función.
// Ejemplo:
let edades = [18, 22, 15, 30, 12];
let mayoresDeEdad = edades.filter(edad => edad >= 18);
console.log(mayoresDeEdad); // [18, 22, 30]
console.log(edades); // [18, 22, 15, 30, 12]

// Método 4: [slice()]
// Descripción: Devuelve una copia superficial de una porción del arreglo en un nuevo arreglo, sin modificar el original.
// Ejemplo: 
let letrasss = ["a", "b", "c", "d", "e"];
let subarreglo = letrasss.slice(1, 4);
console.log(subarreglo); // ["b", "c", "d"]
console.log(letrasss); // ["a", "b", "c", "d", "e"]

// Método 5: [reduce()]
// Descripción: Reduce el arreglo a un único valor aplicando una función acumuladora a cada elemento del arreglo (de izquierda a derecha).
// Ejemplo:
let valores = [1, 2, 3, 4];
let suma = valores.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
console.log(suma); // 10
console.log(valores); // [1, 2, 3, 4]
