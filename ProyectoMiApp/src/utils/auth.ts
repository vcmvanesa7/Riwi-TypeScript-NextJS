import { usuario } from "./usuarios";
import { User } from "@/dto/user";

export function authenticate(name: string, password: string): User | null {
  const found = usuario.find(u => u.name === name && u.password === password);
  return found || null;
}
