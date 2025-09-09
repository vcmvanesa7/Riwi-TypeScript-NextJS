// Parte 7: Extender interfaces
// ===============================

interface User {
    id: number;
    name: string;
    email: string;
}

interface Admin extends User {
    permissions: string[];
}

// Type Guard: permite saber si un objeto es Admin
function isAdmin(user: User | Admin): user is Admin {
    return (user as Admin).permissions !== undefined;
}

const normalUser: User = { id: 1, name: "Sofía", email: "sofia@mail.com" };
const adminUser: Admin = { id: 2, name: "Luis", email: "luis@mail.com", permissions: ["read", "write"] };

console.log("¿Sofía es admin?", isAdmin(normalUser));
console.log("¿Luis es admin?", isAdmin(adminUser));
