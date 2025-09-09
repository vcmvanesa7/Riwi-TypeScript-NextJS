#  Taller de TypeScript 

##  Objetivos
1. Comprender los tipos primitivos y sus usos.
2. Definir **interfaces** para tipar objetos.
3. Practicar props opcionales (`?`) y propiedades de solo lectura (`readonly`).
4. Construir funciones con parámetros y retornos tipados.
5. Extender interfaces y trabajar con objetos más complejos.

---

##  Parte 1: Tipos primitivos

### Ejercicio 1.1
Declara variables con los tipos: `string`, `number`, `boolean`, `null` y `undefined`.

```ts
// TODO: Declara las siguientes variables con sus respectivos tipos
let username: string = "Carlos";
// agrega más aquí...
```

### Ejercicio 1.2
Crea una variable `role` que solo acepte `"admin" | "editor" | "viewer"`.

---

##  Parte 2: Objetos tipados con interfaces

### Ejercicio 2.1
Crea una interfaz para un **usuario**:

```ts
interface User {
  id: number;
  name: string;
  email: string;
  cc: number;
  lastName: string
}
```

Luego, construye tres objetos `user1`, `user2` ...  que cumpla con esta interfaz.

### Ejercicio 2.2
Agrega a `User` un campo opcional `phone?: string` y crea dos objetos:
- Uno con teléfono.
- Uno sin teléfono.

---

##  Parte 3: Props opcionales y `readonly`

### Ejercicio 3.1
Haz que `id` sea de solo lectura (`readonly`).
- Intenta reasignar `id` y observa el error.

### Ejercicio 3.2
Agrega un campo `nickname?: string` y crea una función:

Investiga y recuerda que es un ternario en JS

```ts
function showUser(user: User): string {
  return user.nickname ? user.nickname : user.name;
}
```

Realiza llamados de esta función con objetos creados anteriormente como prop

---

##  Parte 4: Interfaces anidadas

### Ejercicio 4.1
Crea:

```ts
interface Address { 
  street: string; 
  city: string; 
  country: string; 
}
```

Agrega `address?: Address` a `User`.

### Ejercicio 4.2
Crea un objeto `user10` con `address` completo.

---

##  Parte 5: Funciones tipadas

### Ejercicio 5.1
Crea una función que reciba un `User` y retorne un string con su nombre y correo.

### Ejercicio 5.2
Crea una función `addScore` que reciba:
- un usuario,
- una materia,
- un puntaje.

Debe agregar el puntaje en un objeto `scores` dentro del usuario.  

Pista:
```ts
interface Scores {
  [subject: string]: number;
}
```

---

##  Parte 6: Interfaces para props de componentes

### Ejercicio 6.1
Crea:

```ts
interface ButtonProps {
  label: string;
  disabled?: boolean;
  onClick?: () => void;
}
```

Implementa una función `renderButton` que reciba `ButtonProps` y retorne un string:
- `"[X] label"` si está deshabilitado.
- `"[ ] label"` si no.

---

##   Parte 7: Extender interfaces

### Ejercicio 7.1
Crea:

```ts
interface Admin extends User {
  permissions: string[];
}
```

### Ejercicio 7.2
Haz una función `isAdmin(user: User | Admin): user is Admin` que determine si un usuario es admin.

---
