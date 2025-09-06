// Taller de Investigación sobre Objetos en JavaScript
// Nombre del estudiante: [Hanna Garcia Guerra]

// Parte 1: El Mundo de los Objetos

// Investigación #1: Objeto Literal
// 1. Define qué es un objeto literal en JavaScript.
/**
 * Escribe tu explicación aquí:
 * Un objeto literal es una colección de propiedades y métodos, definidos entre llaves {}. Cada propiedad es una clave (key) asociada a un valor (value), y los métodos son funciones que realizan acciones relacionadas con el objeto. 
 * Se utilizan para representar entidades del mundo real y organizar datos de manera estructurada.
 */

// 2. Muestra la sintaxis básica para crear un objeto literal.
// let nombreObjeto = {   
//     propiedad1: valor1,
//     propiedad2: valor2,
//     propiedad3: valor3
// };


// 3. Crea un objeto literal llamado `computador` con 5 propiedades.
// let computador = {
//     marca: "Dell",
//     modelo: "XPS 13",
//     procesador: "Intel Core i7",
//     ram: "16GB",
//     almacenamiento: "512GB SSD"
// };


// Muestra el objeto `computador` en la consola.
// console.log("Objeto computador:", computador);


// Investigación #2: Objeto por Constructor
// 1. Define qué es un objeto por constructor y su diferencia con el literal.
/**
 * Escribe tu explicación aquí:
 * Un objeto por constructor es creado mediante una función constructora, que actúa como plantilla para crear múltiples instancias de objetos con las mismas propiedades y métodos. La diferencia principal con el objeto literal es que el objeto literal es una instancia única definida directamente, mientras que el objeto por constructor permite crear múltiples objetos similares a partir de la misma estructura.
 */

// 2. Crea un objeto utilizando el constructor `new Object()` y asígnale las mismas propiedades del objeto `computador`.
// let computadorPorConstructor = new Object();

// Asigna las propiedades aquí
// computadorPorConstructor.marca = "Dell";
// computadorPorConstructor.modelo = "XPS 13";
// computadorPorConstructor.procesador = "Intel Core i7";
// computadorPorConstructor.ram = "16GB";
// computadorPorConstructor.almacenamiento = "512GB SSD";


// Muestra el objeto `computadorPorConstructor` en la consola.
// console.log("Objeto computador por constructor:", computadorPorConstructor);


// 3. Crea una función constructora llamada `Producto` y crea dos instancias.
// Función constructora
//function Producto(nombre, precio, categoria, stock, proveedor) {
//  this.nombre = nombre;
//  this.precio = precio;
//  this.categoria = categoria;
//  this.stock = stock;
//  this.proveedor = proveedor;
//};


// Crea dos instancias de `Producto`
// let producto1 = new Producto("Laptop", 1200, "Electrónica", 50, "TechSupplier");
// let producto2 = new Producto("Smartphone", 800, "Electrónica", 100, "MobileWorld");


// Muestra las instancias en la consola
// console.log("Instancia 1 de Producto:", producto1);
// console.log("Instancia 2 de Producto:", producto2);
