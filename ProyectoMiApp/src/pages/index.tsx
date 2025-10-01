import { notification } from "@/utils/notifications";
import { ToastContainer } from "react-toastify";
import styles from "@/pages/home.module.css";
import stylesCard from "@/styles/components/card.module.css";
import { MyButton } from "@/components/button/Button";
import { MyCard } from '@/components/button/card';
import React from 'react';
// import { useState } from "react";
import { getProperties } from "@/services/properties";

export default function Home() {
// const [loader, setLoader] = useState(false);

  // const handleClicklLoader = () => {
  //   setLoader(true);
  //   setTimeout(() => {
  //     setLoader(false);
  //   }, 3000);
  // };

  // cost [properties, setProperties] = useState([])

  const handleClickError = () => {
    notification("Error al cargar", "error", 2000);
  };

  const handleClickSuccess = () => {
    notification("Error al cargar", "success");
  };

  const handleClickWarning = () => {
    notification("Error al cargar", "warning", 1000);
  };


  const handleClick  = async ()=> {
    const response = await getProperties();
    console.log(response.data);

    // setProperties(response.data);
  }
 
  return (
    <div>
      <h1>Bienvenido a mi App</h1>
      <button onClick={handleClickError} className={styles.button} >
        Botón de error
      </button>
      <button onClick={handleClickSuccess} className={styles.button}>
        Botón de Success
      </button>
      <MyButton text={"Guardar"} icon = {"S" } disabled/>
      <MyButton text={"Cancelar"} icon = {"X"} />
      
      <button onClick={handleClickWarning} className={styles.button}>
        Botón de Warning  
      </button>
      <ToastContainer />

      <div className={stylesCard.cardContainer}>
        <MyCard texto1={'Search engine optimization'} texto2={'learn more'} image={''} icon={''} color={'green'} />
        <MyCard texto1={'Search engine optimization'} texto2={'learn more'} image={''} icon={''} color={'white'} />
        <MyCard texto1={'Search engine optimization'} texto2={'learn more'} image={''} icon={''} color={'black'} />
      </div>

      <button onClick={handleClick} className={styles.button}>
        Botón endpoint
      </button>
      
    </div>
  );
}




