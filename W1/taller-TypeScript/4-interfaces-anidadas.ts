// Parte 4: Interfaces anidadas
// ===============================

interface Address {
    street: string;
    city: string;
    country: string;
} // Nueva interfaz para dirección

// Modificamos la interfaz User para incluir una dirección opcional

interface User {
    id: number;
    name: string;
    lastName: string;
    email: string;
    cc: number;
    address?: Address;
}

// Creamos un usuario con address
const user10: User = {
    id: 10,
    name: "Andrés",
    lastName: "Suárez",
    email: "andres@mail.com",
    cc: 112233,
    address: {
        street: "Calle 123",
        city: "Medellín",
        country: "Colombia"
    }
};

console.log(user10);
