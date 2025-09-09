// // Parte 2: Objetos tipados con interfaces
// // ===============================

// // Definimos la interfaz de un usuario
// interface User {
//     id: number;
//     name: string;
//     lastName: string;
//     email: string;
//     cc: number;
//     phone?: string; // opcional
// }

// // Creamos algunos objetos que cumplen con la interfaz
// const user1: User = {
//     id: 1,
//     name: "Laura",
//     lastName: "Gómez",
//     email: "laura@mail.com",
//     cc: 123456
// };

// const user2: User = {
//     id: 2,
//     name: "Pedro",
//     lastName: "Martínez",
//     email: "pedro@mail.com",
//     cc: 654321,
//     phone: "3001234567" // con teléfono
// };

// const user3: User = {
//     id: 3,
//     name: "María",
//     lastName: "Pérez",
//     email: "marip@gmail.com",
//     cc: 789456,
// };

// console.log(user1, user2, user3);


// Intentar crear un objeto que no cumpla con la interfaz dará error
// const invalidUser: User = {
//   id: 3,
//   name: "Ana",
//   email: "
//   cc: 111222
// }; // Error: falta lastName



