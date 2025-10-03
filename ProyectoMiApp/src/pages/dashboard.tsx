import { propertyProps } from "@/dto/properties";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import React from "react";
import { getProperties } from "@/services/properties";


const Dashboard = () => {

  const router = useRouter();
  const [properties, setProperties] = useState<propertyProps[] | []>([]);
  const handleClickBack = () => {
    router.back();
  };



  useEffect(() => {
    async function loadData() {
      try{
        const response = await getProperties();

        if (response.ok) {
          setProperties(response.data);
        } else {
          console.error("Error loading properties")
        }
      }catch (error){
        console.error("Error conecting API")
      }
    }
    loadData();
  }, []);



  return (
    <section>
      <div>DASHBOARD DE PROPIEDADES</div>

      {properties.length === 0 ? (
        <p>There are no properties yet.</p>
      ) : (
        properties.map((prop) => (
          <div key={prop._id}>
            <h3>{prop.name}</h3>
            <p>{`Valor: ${prop.value}`}</p>
            {prop.img && <img src={prop.img} alt={prop.name} width={200}/>}
          </div>
        ))
      )}
      <button onClick={handleClickBack}>Regresar</button>
    </section>
  );
};

export default Dashboard;

