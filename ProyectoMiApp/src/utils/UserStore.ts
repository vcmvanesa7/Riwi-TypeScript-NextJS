
//list`, `findByName`, `create`, `update`, `remove
//Cada método **imprima en consola** un mensaje simulando una llamada HTTP (`GET`, `POST`, `PATCH`, `DELETE`)

import { User } from "@/dto/user";
import { usuario } from "./usuarios";

export class UserStore {
    private users : User[];

    constructor (initial = usuario) {
        this.users = initial;
    };

      // Listar todos
  list(): User[] {
    console.log("GET /users - list");
    // TODO: devolver la lista de usuarios (operación sobre this.users)
    
    throw new Error("Implementar list()");
  }

  // Buscar por nombre
  findByName(name: string): User | undefined {
    console.log(`GET /users?name=${name} - findByName`);
    // TODO: buscar en this.users y devolver el usuario o undefined
    throw new Error("Implementar findByName()");
  }

  // Crear nuevo usuario
  create(newUser: User): User {
    console.log("POST /users - create", newUser);
    // TODO: validar no duplicado, añadir newUser a this.users y devolverlo
    throw new Error("Implementar create()");
  }

  // Actualizar (parcheo)
  update(name: string, patch: Partial<User>): User {
    console.log(`PATCH /users/${name} - update`, patch);
    // TODO: encontrar usuario, aplicar patch (merge), actualizar this.users y devolver actualizado
    throw new Error("Implementar update()");
  }

  // Eliminar
  remove(name: string): boolean {
    console.log(`DELETE /users/${name} - remove`);
    // TODO: eliminar usuario por name de this.users y devolver true/false según resultado
    throw new Error("Implementar remove()");
  }


}

