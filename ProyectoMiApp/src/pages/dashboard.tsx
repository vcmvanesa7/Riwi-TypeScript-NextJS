import { useRouter } from "next/router";
import React from "react";


const Dashboard = () => {
  console.log("Bienvenido al dashboard");

  const router = useRouter();

  const handleClickBack = () => {
    console.log("Se hizo click en regresar");
    router.back();
  };

  return (
    <section>
      <div>Bienvenido al dashboard</div>
      <button onClick={handleClickBack}>Regresar</button>
    </section>
  );
};

export default Dashboard;

