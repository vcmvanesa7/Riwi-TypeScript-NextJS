// Parte 1: Tipos primitivos
// =========================

// Ejercicio 1.1
// Declaramos variables con distintos tipos primitivos.
// TypeScript nos obliga a especificar el tipo y nos avisa si intentamos asignar algo incorrecto.

let username: string = "Carlos";  // tipo string
let age: number = 25;             // tipo number
let isStudent: boolean = true;    // tipo boolean
let emptyValue: null = null;      // tipo null
let notAssigned: undefined = undefined; // tipo undefined

console.log(username, age, isStudent, emptyValue, notAssigned);

// Ejercicio 1.2
// Aquí usamos un "union type" para limitar los valores posibles.
// La variable `role` solo podrá ser "admin", "editor" o "viewer".

let role: "admin" | "editor" | "viewer" = "admin";
// role = "otro"; //  Error: no está permitido
console.log("Rol:", role);
