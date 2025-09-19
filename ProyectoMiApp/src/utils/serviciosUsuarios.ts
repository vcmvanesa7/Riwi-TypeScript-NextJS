// import { User } from "@/dto/user"

import { Usuario } from "@/dto/user";

// export const usuario : User[] = [
//     {
//         name: "Vanesa",
//         password: "123456"
//     },
//     {
//         name: "oscar",
//         password: "123456"
//     },
//     {
//         name: "sarah",
//         password:"123456"
//     },
// ]

export class ServiciosUsuario {
  private url: string;
  //Defino URL de mi API
  constructor() {
    this.url = "http://localhost:3000/api/usuarios";
  }

  //GET: obtener todos los usuarios
  async getUsers(): Promise<Usuario[]> {
    const res = await fetch(this.url);
    if (!res.ok) {
      throw new Error("Error al obtener ususarios");
    }
    return await res.json();
  };
  
  //GET : Por ID
  async getUserByID(id:number): Promise<Usuario> {
    const res = await fetch(`${this.url} / ${id}}`);
    if (!res.ok) {
      throw new Error("Error al obtener ususarios");
    }
    return await res.json();
    };  


  //POST: Crear un nuevo ususario
  async createUser(user: Usuario): Promise<Usuario> {
    const res = await fetch(this.url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (!res.ok) {
      throw new Error("Error al crear ususario");
    }
    return await res.json();
  };
  
  //PUT: Actualizar ususario completo
  async updateUser (id:number, user: Usuario) : Promise<Usuario> {
    const res = await fetch(`${this.url} / ${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    });
    if (!res.ok){
        throw new Error ("Error al actualizar usuario");
    }
    return await res.json();
  };


  //PATCH: actualizar parcialmente usuario
  async patchUser (id:number, user: Partial<Usuario>) : Promise<Usuario> {
    const res = await fetch(`${this.url} / ${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    });
    if (!res.ok){
        throw new Error ("Error al actualizar usuario");
    }
    return await res.json();
  };


  //DELETE: Eliminar usuario
  async deleteUser(id:number): Promise<void> {
    const res = await fetch(`${this.url} / ${id}`,{
        method : "DELETE",
    });
    if (!res.ok){
        throw new Error ("Error al eliminar el usuario");
    }
    return await res.json();
  }
};

