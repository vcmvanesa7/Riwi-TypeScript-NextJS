// Parte 3: Props opcionales y readonly
// ===============================

interface User {
    readonly id: number; // solo lectura
    name: string;
    lastName: string;
    email: string;
    cc: number;
    phone?: string;
    nickname?: string;
}

// Intentar cambiar id después de creado dará error 
const user3: User = {
    id: 3,
    name: "María",
    lastName: "Pérez",
    email: "maria@mail.com",
    cc: 789456,
    nickname: "Mari"
};
// user3.id = 10; // Error: Cannot assign to 'id' 
// because it is a read-only property.

const user1: User = {
    id: 1,
    name: "Laura",
    lastName: "Gómez",
    email: "laura@mail.com",
    cc: 123456
};

// Función que usa operador ternario para mostrar nickname o name
function showUser(user: User): string {
    return user.nickname ? user.nickname : user.name;
}

console.log(showUser(user1)); // imprime "Laura" name
console.log(showUser(user3)); // imprime "Mari" nickname
