import React from "react";
import styles from "@/pages/home.module.css";

interface MiButtonProps{
    text:string,
    icon:string,
    disabled?: boolean,
    loading?: boolean,
    click?: ()=> void,
}

export const MyButton = ({text,icon, disabled=false, loading=false, click}:MiButtonProps)=>{

   
    return (
        <button 
        onClick={click}
        className={`${styles.button} ${disabled ? styles["button--disabled"] : "" }`}
        disabled={disabled||loading} 
        > 
            <div> {text} </div>
            <div> {icon} </div>

        </button>
        
    )
};



