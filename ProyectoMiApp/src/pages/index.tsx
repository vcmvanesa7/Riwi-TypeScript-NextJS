// import { notification } from "@/utils/notifications";
// import { ToastContainer } from "react-toastify";
// import styles from "@/pages/home.module.css";
// import stylesCard from "@/styles/components/card.module.css";
// import { MyButton } from "@/components/button/Button";
// import { MyCard } from '@/components/button/card';
// import React, { useEffect } from 'react';
// import { useState } from "react";
// import { getProperties } from "@/services/properties";
// import { propertyProps } from "@/dto/properties";

// interface dataProperties {
//   ok :string,
//   miInfo: propertyProps[]
// }

// export default function Home() {
// // const [loader, setLoader] = useState(false);

//   // const handleClicklLoader = () => {
//   //   setLoader(true);
//   //   setTimeout(() => {
//   //     setLoader(false);
//   //   }, 3000);
//   // };

//   const [dataProperties, setDataProperties] = useState({} as dataProperties);

//   const handleClickError = () => {
//     notification("Error al cargar", "error", 2000);
//   };

//   const handleClickSuccess = () => {
//     notification("Error al cargar", "success");
//   };

//   const handleClickWarning = () => {
//     notification("Error al cargar", "warning", 1000);
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await getProperties();
//       setDataProperties(response);
//     }
//     fetchData();
//   }, []);

//   const handleClick  = async ()=> {
//     const response = await getProperties();
//     console.log(response);

//     setDataProperties(response);
//   }

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await getProperties();
//       console.log(response);
//       setDataProperties(response);
//     }
//     fetchData();
//   }, []);
// console.log(dataProperties);

//   return (
//     <div>
//       <h1>Bienvenido a mi App</h1>
//       <button onClick={handleClickError} className={styles.button}>
//         Botón de error
//       </button>
//       <button onClick={handleClickSuccess} className={styles.button}>
//         Botón de Success
//       </button>
//       <MyButton text={"Guardar"} icon={"S"} disabled />
//       <MyButton text={"Cancelar"} icon={"X"} />

//       <button onClick={handleClickWarning} className={styles.button}>
//         Botón de Warning
//       </button>
//       <ToastContainer />

//       <div className={stylesCard.cardContainer}>
//         <MyCard
//           texto1={"Search engine optimization"}
//           texto2={"learn more"}
//           image={""}
//           icon={""}
//           color={"green"}
//         />
//         <MyCard
//           texto1={"Search engine optimization"}
//           texto2={"learn more"}
//           image={""}
//           icon={""}
//           color={"white"}
//         />
//         <MyCard
//           texto1={"Search engine optimization"}
//           texto2={"learn more"}
//           image={""}
//           icon={""}
//           color={"black"}
//         />
//       </div>

//       <button onClick={handleClick} className={styles.button}>
//         Botón llamar endpoint
//       </button>

//       {dataProperties.ok && (
//         <div className="flex gap-2">
//           {dataProperties.miInfo.map((property) => (
//             <div key={property._id}>
//               <div>{property.name}</div>
//               <div>{property.value}</div>
//               {/* <imgage src={property.img} alt={property.name} /> */}
//             </div>
//           ))}
//         </div>
//       )}

//     </div>
//   );
// }
import { useContext, useState } from "react";
import { useRouter } from "next/router";
import { notification } from "@/helpers/utils";
import { MyContext } from "@/context/Context";
import { Input as HeroInput } from "@heroui/input";
import { Button } from "@heroui/button";
import { Input, Switch } from "@heroui/react";

const userLogueado = {
  name: "vanesa",
  role: "admin",
  isActive: true,
  date: "24/12/2025",
};

export default function Home() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const { setUserLogged, setIsActive, isActive } = useContext(MyContext);
  const router = useRouter();

  const handleClick = async () => {
    if (user === "vanesa" && pass === "123456") {
      setUserLogged(userLogueado);
      notification("login exitoso", "success");
      router.push("/dashboard");
    } else {
      notification("Credenciales inválidas", "error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md space-y-6">
        <h1 className="text-2xl font-bold text-center text-gray-800">Login</h1>

        <Input
          label="Usuario"
          placeholder="Ingrese su usuario"
          type="text"
          onChange={(e) => setUser(e.target.value)}
        />

        <HeroInput
          label="Contraseña"
          placeholder="Ingrese su contraseña"
          type="password"
          onChange={(e) => setPass(e.target.value)}
        />

        <Button
          onPress={handleClick}
          className="w-full"
          color="primary"
        >
          Login
        </Button>

        <div className="flex items-center justify-between">
          <span className="text-gray-700 font-medium">Activ?</span>
          <Switch
            onValueChange={setIsActive}
            isSelected={isActive}
          />
        </div>

        <div className="text-center text-sm text-gray-600">
          {isActive ? (
            <span className="text-green-600 font-medium">Está activo</span>
          ) : (
            <span className="text-red-500 font-medium">Está desactivado</span>
          )}
        </div>
      </div>
    </div>
  );
}
