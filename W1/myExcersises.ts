// //example is to use a function like Array.isArray:

// function welcomePeople(x: string[] | string) {
//   if (Array.isArray(x)) {
//     // Here: 'x' is 'string[]'
//     console.log("Hello, " + x.join(" and "));
//   } else {
//     // Here: 'x' is 'string'
//     console.log("Welcome lone traveler " + x);
//   }
// }

// welcomePeople(["Alice", "Bob", "Charlie"]);
// welcomePeople(["Alice"]);


// // If Union has a common method. (slice method)
// function getFirstThree(x: Number[] | string) {
//   return x.slice(0,6); //.slice returns those positions
// }

// console.log(getFirstThree([2,4,6,8,10,11,12,13,14,15,16,18,19,20]));
// console.log(getFirstThree("VanesaIntentando"));



//Type Aliases
//------------

// type point = {
//   x:number,
//   y:number,
// }

// function printCoord (coordenada : point) {
//   console.log(`The coodinate's values are => ${coordenada.x}°Sur-${coordenada.y}°Este`)
// };

// printCoord({x:123,y:456,})


// --- DIFERENCES BETWEEN TYPE AND INTERFACE ---

// 1. Both can extend but in diffrent ways
// ---interface
interface persona2 {
  nombre: string;
  edad: number;
};
interface empleado2 extends persona2 { // Extends
  salario2 : number
};
const Empleado2 : empleado2 = {
  nombre : "Juan",
  edad : 25,
  salario2 : 2000
}


// ---Type
type persona = {
  nombre: string;
  edad: number;
};
type empleado = persona & {   // Extends
  salario : number
}
const Empleado : empleado = {
  nombre : "Juan",
  edad : 25,
  salario : 2000
}

//2. Union of types (Only Type)
//This can't be done with 'interface'

type Answer = "Yes" | "No" |"Maybe"
let desition : Answer = "Yes";

//3. Reopen or merge statements (Interface Only)
interface user {
  name : string;
}
 interface user {
  lastName : string,
  edad : number
 }

 const User : user = {
   name: "Vanesa",
   lastName: "Carrillo",
   edad: 29
 }

//4. Use primitives types (Type Only)
//Interface cannot define primitive types or functions directly

type addition = (a:number, b:number, c: number) => number;
const sum : addition = (a,b,c ) => a + b + c;

let resultado = sum(1, 2, 3);
console.log(resultado);
