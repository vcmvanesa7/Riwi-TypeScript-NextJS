import Image from "next/image";
import React from "react";


interface CardProps {
  texto1: string;
  texto2: string;
  image: string;
  icon: string;
  color: "Cardgreen" | "Cardblack" | "Cardwhite";
}

export const MyCard = ({ texto1, texto2, image, icon, color }: CardProps) => {
  return (
    <div className= {`card card--${color}`} >
      <div  className="card__leftSide" >
        <div className="card__leftSide--title" >
          <h2>{texto1}</h2>
        </div>
        <div  className="card__leftSide--link" >
          <Image src={icon} alt="image" width={64} height={64} />
          <p>{texto2}</p>
        </div>
      </div>

      <div  className="card__rightSide"  >
        <Image src={image} alt="image" />
      </div>
    </div>
  );
};
