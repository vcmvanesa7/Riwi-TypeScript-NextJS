// Parte 5: Funciones tipadas
// ===============================

interface User {
    id: number;
    name: string;
    email: string;
    scores?: Scores; // opcional
}

interface Scores {
    [subject: string]: number; // key dinámica
}

// Función que retorna un string con nombre y correo
function showUserInfo(user: User): string {
    return `Nombre: ${user.name}, Email: ${user.email}`;
}

// Función que agrega puntajes a un usuario
function addScore(user: User, subject: string, score: number): void {
    if (!user.scores) {
        user.scores = {};
    }
    user.scores[subject] = score;
}

const user5: User = { id: 5, name: "Camilo", email: "camilo@mail.com" };

console.log(showUserInfo(user5));

addScore(user5, "Matemáticas", 95);
addScore(user5, "Historia", 88);

console.log(user5);
