// import { propertyProps } from "@/dto/properties";
// import { useRouter } from "next/router";
// import { useState, useEffect } from "react";
// import React from "react";
// import { getProperties } from "@/services/properties";
// import styles from "@/styles/Dashboard.module.css";


// const Dashboard = () => {

//   const router = useRouter();
//   const [properties, setProperties] = useState<propertyProps[] | []>([]);
//   const handleClickBack = () => {
//     router.back();
//   };



//   useEffect(() => {
//     async function loadData() {
//       try {
//         const response = await getProperties();

//         if (response.ok) {
//           setProperties(response.data);
//         } else {
//           console.error("Error loading properties")
//         }
//       } catch (error) {
//         console.error("Error conecting API")
//       }
//     }
//     loadData();
//   }, []);


//   return (
//     <section className={styles.dashboardContainer}>
//       <h2 className={styles.title}>Dashboard de Propiedades </h2>

//       {properties.length === 0 ? (
//         <p>No hay propiedades aún.</p>
//       ) : (
//         <div className={styles.cardsGrid}>
//           {properties.map((prop) => (
//             <div key={prop._id} className={styles.card}>
//               {prop.img && <img src={prop.img} alt={prop.name} />}
//               <div className={styles.cardContent}>
//                 <h3>{prop.name}</h3>
//                 <p>Valor: ${prop.value}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       <button className={styles.backButton} onClick={handleClickBack}>
//         ← Regresar
//       </button>
//     </section>
//   );
// };

// export default Dashboard;


import { MyContext } from "@/contex/Contex";
import { Button } from "@heroui/react";
import { useRouter } from "next/router";
import { useContext } from "react";

const Dashboard = () => {
  const router = useRouter();

  const { userLogged, setIsActive, isActive } = useContext(MyContext);

  console.log(userLogged)

  const handleClick = () => {
    console.log(userLogged)
    setIsActive(!isActive)
    router.back();
  };

  return (
    <>
      <div>Este es el dashboard</div>
      <div>El ususario {userLogged.name} esta logueado</div>
      <Button onPress={handleClick} className="mt-7" color="danger">
        regresar
      </Button>
    </>
  );
};

export default Dashboard;