import { notification } from "@/utils/notifications";
import { ToastContainer } from "react-toastify";
import styles from "@/pages/home.module.css";
import stylesCard from "@/styles/components/card.module.css";
import { MyButton } from "@/components/button/Button";
import { MyCard } from '@/components/button/card';
import React, { useEffect } from 'react';
import { useState } from "react";
import { getProperties } from "@/services/properties";

interface propertyProps {
  _id:string
  name: string,
  value: number,
  img: string
}


interface dataProperties {
  ok :string,
  miInfo: propertyProps[]
}


export default function Home() {
// const [loader, setLoader] = useState(false);

  // const handleClicklLoader = () => {
  //   setLoader(true);
  //   setTimeout(() => {
  //     setLoader(false);
  //   }, 3000);
  // };


  const [dataProperties, setDataProperties] = useState({} as dataProperties);
  
  const handleClickError = () => {
    notification("Error al cargar", "error", 2000);
  };
  
  const handleClickSuccess = () => {
    notification("Error al cargar", "success");
  };
  
  const handleClickWarning = () => {
    notification("Error al cargar", "warning", 1000);
  };
  

  useEffect(() => {
    const fetchData = async () => {
      const response = await getProperties();
      setDataProperties(response);
    }
    fetchData();
  }, []);



  const handleClick  = async ()=> {
    const response = await getProperties();
    console.log(response);

    setDataProperties(response);
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await getProperties();
      console.log(response);
      setDataProperties(response);
    }
    fetchData();
  }, []);
console.log(dataProperties);

 
  return (
    <div>
      <h1>Bienvenido a mi App</h1>
      <button onClick={handleClickError} className={styles.button}>
        Botón de error
      </button>
      <button onClick={handleClickSuccess} className={styles.button}>
        Botón de Success
      </button>
      <MyButton text={"Guardar"} icon={"S"} disabled />
      <MyButton text={"Cancelar"} icon={"X"} />

      <button onClick={handleClickWarning} className={styles.button}>
        Botón de Warning
      </button>
      <ToastContainer />

      <div className={stylesCard.cardContainer}>
        <MyCard
          texto1={"Search engine optimization"}
          texto2={"learn more"}
          image={""}
          icon={""}
          color={"green"}
        />
        <MyCard
          texto1={"Search engine optimization"}
          texto2={"learn more"}
          image={""}
          icon={""}
          color={"white"}
        />
        <MyCard
          texto1={"Search engine optimization"}
          texto2={"learn more"}
          image={""}
          icon={""}
          color={"black"}
        />
      </div>

      <button onClick={handleClick} className={styles.button}>
        Botón llamar endpoint
      </button>

      {dataProperties.ok && (
        <div className="flex gap-2">
          {dataProperties.miInfo.map((property) => (
            <div key={property._id}>
              <div>{property.name}</div>
              <div>{property.value}</div>
              <imgage src={property.img} alt={property.name} />
            </div>
          ))}
        </div>
      )}

    </div>
  );
}




