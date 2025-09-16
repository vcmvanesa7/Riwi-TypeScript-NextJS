// //El archivo que interactúa con el DOM

import { persona } from "@/helpers/utils";
import  styles  from "@/pages/home.module.css"
// import { useState } from "react";
// import { CircleCheckBig, Ban } from "lucide-react";
// import Image from "next/image";

// //TYPE AND INTERFACES
// //-------------------

// type Currency = "COP" |"USD";
// type Gender = "MALE"|"FEMALE"|"UNISEX"|"KIDS";

// interface Impact{
//   waterSaved: number,  //litros
//   plasticRecycled: number, //botellas
//   co2Reduced: number, //kg CO2
// };

// interface Dimensions {
//   widthCm : number,
//   heightCm: number,
//   depthCm?: number,
// };

// interface Product {
//   id: string,
//   name : string,
//   brand : string,
//   category : string,
//   quantity : number,
//   price : number,
//   currency : Currency
//   isActive : boolean,
//   imageUrl: string,
//   gender: Gender,
//   createAt: string, //Iso
//   tags: string[], //['Recicle','Water-saving']
//   dimensions: Dimensions
//   impact: Impact
//   description?: string,
// };

// interface Address {
//   street?: string,
//   city?: string,
//   state?: string,
//   postalCode?: string,
//   country?: string,
// };

// interface User {
//   id: string,
//   name: string,
//   email: string,
//   address: Address,
//   ecoPoints: number,
//   totalImpact: Impact,
//   createdAt: string,
// };

// //CREATE INITIALS DATES
// //----------------------------

// const products: Product[] = [
//   {
//   id: "P1",
//   name: "Tshirt",
//   brand: "Eco Fabrics",
//   category: "Clothes",
//   quantity: 60,
//   price: 45000,
//   currency: "COP",
//   isActive: true,
//   imageUrl: "/images/tshirt.png",
//   gender: "MALE",
//   createAt: "2024-06-01T00:00:00Z",
//   tags: ["Recycle", "Water-saving"],
//   dimensions: {
//     widthCm: 40,
//     heightCm: 60,
//     depthCm: 1,
//   },
//   impact: {
//     waterSaved: 1000,
//     plasticRecycled: 5,
//     co2Reduced: 2,
//   },
//   description: "Eco-friendly T-shirt made from recycled materials.",
//   },
//   {
//     id: "P2",
//     name: "Reusable Water Bottle",
//     brand: "GreenSip",
//     category: "Accessories",
//     quantity: 120,
//     price: 32000,
//     currency: "COP",
//     isActive: true,
//     imageUrl: "/images/bottle.png",
//     gender: "UNISEX",
//     createAt: "2024-07-05T00:00:00Z",
//     tags: ["Plastic-free", "Reusable"],
//     dimensions: {
//       widthCm: 8,
//       heightCm: 25,
//     },
//     impact: {
//       waterSaved: 0,
//       plasticRecycled: 10,
//       co2Reduced: 1,
//     },
//     description: "Stainless steel bottle for everyday use.",
//   },
//   {
//     id: "P3",
//     name: "Organic Cotton Hoodie",
//     brand: "NatureWear",
//     category: "Clothes",
//     quantity: 45,
//     price: 98000,
//     currency: "COP",
//     isActive: true,
//     imageUrl: "/images/hoodie.png",
//     gender: "FEMALE",
//     createAt: "2024-06-15T00:00:00Z",
//     tags: ["Organic", "Sustainable"],
//     dimensions: {
//       widthCm: 45,
//       heightCm: 70,
//       depthCm: 2,
//     },
//     impact: {
//       waterSaved: 2500,
//       plasticRecycled: 0,
//       co2Reduced: 3,
//     },
//     description: "Warm hoodie made from 100% organic cotton.",
//   },
//   {
//     id: "P4",
//     name: "Recycled Backpack",
//     brand: "EcoPack",
//     category: "Accessories",
//     quantity: 35,
//     price: 120000,
//     currency: "COP",
//     isActive: true,
//     imageUrl: "/images/backpack.png",
//     gender: "UNISEX",
//     createAt: "2024-08-01T00:00:00Z",
//     tags: ["Recycled", "Plastic-free"],
//     dimensions: {
//       widthCm: 30,
//       heightCm: 45,
//       depthCm: 15,
//     },
//     impact: {
//       waterSaved: 1500,
//       plasticRecycled: 8,
//       co2Reduced: 4,
//     },
//     description: "Backpack made from recycled PET bottles.",
//   },
//   {
//     id: "P5",
//     name: "Eco Kids Sneakers",
//     brand: "GreenSteps",
//     category: "Footwear",
//     quantity: 50,
//     price: 85000,
//     currency: "COP",
//     isActive: true,
//     imageUrl: "/images/sneakers_kids.png",
//     gender: "KIDS",
//     createAt: "2024-06-20T00:00:00Z",
//     tags: ["Eco-leather", "Recycled"],
//     dimensions: {
//       widthCm: 20,
//       heightCm: 10,
//       depthCm: 25,
//     },
//     impact: {
//       waterSaved: 1200,
//       plasticRecycled: 3,
//       co2Reduced: 2,
//     },
//     description: "Durable sneakers made for eco-conscious kids.",
//   },
//   {
//     id: "P6",
//     name: "Compostable Phone Case",
//     brand: "BioCase",
//     category: "Accessories",
//     quantity: 200,
//     price: 30000,
//     currency: "COP",
//     isActive: true,
//     imageUrl: "/images/phone_case.png",
//     gender: "UNISEX",
//     createAt: "2024-07-01T00:00:00Z",
//     tags: ["Biodegradable", "Plastic-free"],
//     dimensions: {
//       widthCm: 7,
//       heightCm: 14,
//     },
//     impact: {
//       waterSaved: 0,
//       plasticRecycled: 0,
//       co2Reduced: 1,
//     },
//     description: "Eco-friendly phone case made from plant fibers.",
//   },
//   {
//     id: "P7",
//     name: "Bamboo Toothbrush Set",
//     brand: "EcoSmile",
//     category: "Personal Care",
//     quantity: 300,
//     price: 25000,
//     currency: "COP",
//     isActive: true,
//     imageUrl: "/images/toothbrush.png",
//     gender: "UNISEX",
//     createAt: "2024-05-20T00:00:00Z",
//     tags: ["Biodegradable", "Sustainable"],
//     dimensions: {
//       widthCm: 3,
//       heightCm: 20,
//     },
//     impact: {
//       waterSaved: 0,
//       plasticRecycled: 0,
//       co2Reduced: 2,
//     },
//     description: "Pack of 4 biodegradable bamboo toothbrushes.",
//   },
//   {
//     id: "P8",
//     name: "Recycled Denim Jeans",
//     brand: "GreenThreads",
//     category: "Clothes",
//     quantity: 70,
//     price: 130000,
//     currency: "COP",
//     isActive: true,
//     imageUrl: "/images/jeans.png",
//     gender: "MALE",
//     createAt: "2024-06-10T00:00:00Z",
//     tags: ["Recycled", "Water-saving"],
//     dimensions: {
//       widthCm: 35,
//       heightCm: 100,
//       depthCm: 2,
//     },
//     impact: {
//       waterSaved: 5000,
//       plasticRecycled: 0,
//       co2Reduced: 3,
//     },
//     description: "Jeans made from recycled denim fabric.",
//   },
//   {
//     id: "P9",
//     name: "Hemp Tote Bag",
//     brand: "EcoCarry",
//     category: "Accessories",
//     quantity: 150,
//     price: 40000,
//     currency: "COP",
//     isActive: true,
//     imageUrl: "/images/tote_bag.png",
//     gender: "FEMALE",
//     createAt: "2024-08-10T00:00:00Z",
//     tags: ["Reusable", "Organic"],
//     dimensions: {
//       widthCm: 35,
//       heightCm: 40,
//     },
//     impact: {
//       waterSaved: 200,
//       plasticRecycled: 0,
//       co2Reduced: 1,
//     },
//     description: "Reusable tote made from organic hemp.",
//   },
//   {
//     id: "P10",
//     name: "Solar Power Bank",
//     brand: "SunCharge",
//     category: "Electronics",
//     quantity: 40,
//     price: 95000,
//     currency: "COP",
//     isActive: true,
//     imageUrl: "/images/solar_powerbank.png",
//     gender: "UNISEX",
//     createAt: "2024-06-30T00:00:00Z",
//     tags: ["Solar", "Reusable"],
//     dimensions: {
//       widthCm: 8,
//       heightCm: 15,
//       depthCm: 2,
//     },
//     impact: {
//       waterSaved: 0,
//       plasticRecycled: 1,
//       co2Reduced: 5,
//     },
//     description: "Portable solar charger for all your devices.",
//   },
//   {
//     id: "P11",
//     name: "Recycled Sunglasses",
//     brand: "GreenView",
//     category: "Accessories",
//     quantity: 100,
//     price: 60000,
//     currency: "COP",
//     isActive: true,
//     imageUrl: "/images/sunglasses.png",
//     gender: "UNISEX",
//     createAt: "2024-07-18T00:00:00Z",
//     tags: ["Recycled", "UV-protection"],
//     dimensions: {
//       widthCm: 14,
//       heightCm: 5,
//     },
//     impact: {
//       waterSaved: 0,
//       plasticRecycled: 2,
//       co2Reduced: 1,
//     },
//     description: "Stylish sunglasses made from ocean plastics."
//   },
//   {
//   id: "P12",
//   name: "Eco Yoga Mat",
//   brand: "ZenNature",
//   category: "Fitness",
//   quantity: 80,
//   price: 110000,
//   currency: "COP",
//   isActive: true,
//   imageUrl: "/images/yoga_mat.png",
//   gender: "UNISEX",
//   createAt: "2024-07-10T00:00:00Z",
//   tags: ["Biodegradable", "Non-toxic"],
//   dimensions: {
//     widthCm: 60,
//     heightCm: 180,
//     depthCm: 0.5,
//   },
//   impact: {
//     waterSaved: 0,
//     plasticRecycled: 4,
//     co2Reduced: 2,
//   },
//   description: "Yoga mat made from biodegradable and non-toxic materials.",
// },
// {
//   id: "P13",
//   name: "Organic Baby Onesie",
//   brand: "LittleEarth",
//   category: "Clothes",
//   quantity: 90,
//   price: 58000,
//   currency: "COP",
//   isActive: true,
//   imageUrl: "/images/baby_onesie.png",
//   gender: "KIDS",
//   createAt: "2024-07-20T00:00:00Z",
//   tags: ["Organic", "Hypoallergenic"],
//   dimensions: {
//     widthCm: 25,
//     heightCm: 40,
//     depthCm: 1,
//   },
//   impact: {
//     waterSaved: 1800,
//     plasticRecycled: 0,
//     co2Reduced: 1,
//   },
//   description: "Soft onesie made from 100% organic cotton, perfect for sensitive skin.",
// },
// {
//   id: "P14",
//   name: "Recycled Paper Notebook",
//   brand: "EcoNotes",
//   category: "Stationery",
//   quantity: 250,
//   price: 15000,
//   currency: "COP",
//   isActive: true,
//   imageUrl: "/images/notebook.png",
//   gender: "UNISEX",
//   createAt: "2024-08-05T00:00:00Z",
//   tags: ["Recycled", "Plastic-free"],
//   dimensions: {
//     widthCm: 15,
//     heightCm: 21,
//     depthCm: 1,
//   },
//   impact: {
//     waterSaved: 300,
//     plasticRecycled: 0,
//     co2Reduced: 0.5,
//   },
//   description: "Notebook made from 100% post-consumer recycled paper.",
// },
// {
//   id: "P15",
//   name: "Eco-Friendly Lunch Box",
//   brand: "GreenMeal",
//   category: "Kitchenware",
//   quantity: 110,
//   price: 65000,
//   currency: "COP",
//   isActive: true,
//   imageUrl: "/images/lunchbox.png",
//   gender: "UNISEX",
//   createAt: "2024-07-25T00:00:00Z",
//   tags: ["Reusable", "Plastic-free"],
//   dimensions: {
//     widthCm: 18,
//     heightCm: 12,
//     depthCm: 6,
//   },
//   impact: {
//     waterSaved: 0,
//     plasticRecycled: 6,
//     co2Reduced: 2,
//   },
//   description: "Durable, reusable lunch box made from bamboo fiber and stainless steel.",
// }
// ];

// const users: User[] = [
//   {
//     id: "U1",
//     name: "Vanesa Carrillo",
//     email: "vane@mail.com",
//     address: {
//       street: "Cra100#45-32",
//       city: "Medellín",
//       state: "Antioquia",
//       postalCode: "050033",
//       country: "Colombia",
//     },
//     ecoPoints: 120,
//     totalImpact: {
//       waterSaved: 5400,
//       plasticRecycled: 35,
//       co2Reduced: 12,
//     },
//     createdAt: new Date().toISOString(),
//   },
//   {
//     id: "U2",
//     name: "Carlos Gómez",
//     email: "carlosg@mail.com",
//     address: {
//       street: "Calle 50 #20-10",
//       city: "Bogotá",
//       state: "Cundinamarca",
//       postalCode: "110111",
//       country: "Colombia",
//     },
//     ecoPoints: 95,
//     totalImpact: {
//       waterSaved: 3200,
//       plasticRecycled: 20,
//       co2Reduced: 8,
//     },
//     createdAt: new Date().toISOString(),
//   },
//   {
//     id: "U3",
//     name: "Laura Martínez",
//     email: "lauram@mail.com",
//     address: {
//       street: "Av. Las Palmas 123",
//       city: "Cali",
//       state: "Valle del Cauca",
//       postalCode: "760001",
//       country: "Colombia",
//     },
//     ecoPoints: 150,
//     totalImpact: {
//       waterSaved: 7000,
//       plasticRecycled: 40,
//       co2Reduced: 15,
//     },
//     createdAt: new Date().toISOString(),
//   },
//   {
//     id: "U4",
//     name: "Andrés Torres",
//     email: "andrest@mail.com",
//     address: {
//       street: "Carrera 15 #34-56",
//       city: "Barranquilla",
//       state: "Atlántico",
//       postalCode: "080020",
//       country: "Colombia",
//     },
//     ecoPoints: 80,
//     totalImpact: {
//       waterSaved: 2100,
//       plasticRecycled: 10,
//       co2Reduced: 5,
//     },
//     createdAt: new Date().toISOString(),
//   },
//   {
//     id: "U5",
//     name: "Mariana Ruiz",
//     email: "marianar@mail.com",
//     address: {
//       street: "Calle 8 #12-34",
//       city: "Cartagena",
//       state: "Bolívar",
//       postalCode: "130001",
//       country: "Colombia",
//     },
//     ecoPoints: 110,
//     totalImpact: {
//       waterSaved: 4100,
//       plasticRecycled: 25,
//       co2Reduced: 10,
//     },
//     createdAt: new Date().toISOString(),
//   },
// ];

// export default function ProductCard ({product}:{product: Product}) {
//   return(
//     <article className="bg-white rounded-lg shadow p-4">
//       <div>

//       </div>
//     </article>
//   )
// }

// export default function Home() {
//   return (
//     <div>
//       <h1>Productos</h1>
//       <ul>
//         {products.map((product) => (
//           <li key={product.id}>
//             <div>Nombre: {product.name}</div>
//             <div>Marca: {product.brand}</div>
//             <div>Categoría: {product.category}</div>
//             <div>Precio: {product.price} {product.currency}</div>
//             <div>
//               Disponible: {product.isActive ? <CircleCheckBig /> : <Ban />}
//             </div>
//             <div>
//               <Image src={product.imageUrl} alt={product.name} width={100} height={100} />
//             </div>
//             <div>Descripción: {product.description}</div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
//         {state && (
//           <ul className="list">
//             {products?.map((product, index) => (
//               <li className="list-item" key={index}>
//                 <div>Nombre de la moto es:{product.name}</div>
//                 <div>El valor es:{product.price}</div>
//                 <div className="list-isActive">
//                   Disponible: {product.isActive ? <CircleCheckBig /> : <Ban />}
//                 </div>
//                 <div>la cantidad disponible es: {product.amount}</div>
//                 {product.img && (
//                   <img src={product.img} alt={product.name}></img>
//                 )}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// }

// //CREATING CLASSES AND ...

// export default function home() {
//   class Article {
//     name: string;
//     color: string;
//     disponible: boolean;

//     constructor(name: string, color: string, disponible: boolean) {
//       this.name = name;
//       this.color = color;
//       this.disponible = disponible;
//     }

//     showProduct() {
//       return `Nombre Producto:  ${this.name}`;
//     }
//   }

//   const Article1 = new Article("Hat", "black", true);
//   console.log(Article1.name, Article1.color, Article1.disponible);

//   class ArticlePoints extends Article {
//     ecoPoints!: number;

//     constructor(
//       name: string,
//       color: string,
//       disponible: boolean,
//       ecoPoints: number
//     ) {
//       super(name, color, disponible);
//       this.ecoPoints = ecoPoints;
//     }

//     showProdctWithPoints ()
//   }
// }




export default function Home() {
  
  return (    

    <div>
      <h1 className={styles.title}>LISTADO DE USUSARIOS</h1>
      {persona.map((p,index) => (
        <div key={index} className={styles.containerDatos} >
          <h2 className={styles.nameEdad} >{p.nombre} ({p.edad} años)</h2>
          <p>Color favorito: {p.gustos.color}</p>
          <p>Comida favorita: {p.gustos.comida}</p>
          <p>Deporte favorito: {p.gustos.deporte}</p>
          <p>Y su pasión es: {p.gustos.pasion}</p>
        </div>
      )
    )}
    </div>
     
  );
}
