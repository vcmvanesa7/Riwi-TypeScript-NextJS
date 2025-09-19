
import { ServiciosUsuario } from "@/utils/serviciosUsuarios";
import Link from "next/link";


export default function Home() {

  const ClickObtenerUsuarios = async ()=> {
    const api = new ServiciosUsuario ();
    
  
  }


  return (
    <div>
      <h1>Bienvenido a mi App 🚀</h1>

      <button onClick={ClickObtenerUsuarios} >Obtener Usuarios</button>

      <Link href="/login">Ir al Login</Link>
    </div>
  );
}
