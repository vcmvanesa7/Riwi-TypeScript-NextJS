// import { notification } from "@/utils/notifications";
// import { ToastContainer } from "react-toastify";
// import styles from "@/pages/home.module.css";
// import { MyButton } from "@/components/button/Button";

// export default function Home() {
//   const handleClickError = () => {
//     notification("Error al cargar", "error", 2000);
//   };

//   const handleClickSuccess = () => {
//     notification("Error al cargar", "success");
//   };

//   const handleClickWarning = () => {
//     notification("Error al cargar", "warning", 1000);
//   };

 
//   return (
//     <div>
//       <h1>Bienvenido a mi App</h1>
//       <button onClick={handleClickError} className={styles.button}>
//         Botón de error
//       </button>
//       <button onClick={handleClickSuccess} className={styles.button}>
//         Botón de Success
//       </button>

//       <MyButton text={"Guardar"} icon = {"S"} />
//       <MyButton text={"Cancelar"} icon = {"X"} />
      
//       <button onClick={handleClickWarning} className={styles.button}>
//         Botón de Warning
//       </button>
//       <ToastContainer />
//     </div>
//   );
// }





import { MyCard } from '../components/button/card';
import React from 'react';


export default function Home() {

 
  return (
    <div>
      <MyCard texto1={'Search engine optimization'} texto2={'learn more'} image={'./'} icon={''} color={'Cardwhite'} />
      <MyCard texto1={'Search engine optimization'} texto2={'learn more'} image={''} icon={''} color={'Cardwhite'} />
    </div>
  );
}
