import styles from "@/pages/home.module.css";

interface MIButtonProps{
    text:string,
    icon:string
}

export const MyButton = ({text,icon}:MIButtonProps)=>{


    const handleClick = ()=>{
        console.log("hizo click en el botón del componente")
    }

    return (
        <button onClick={handleClick} className={styles.button} >
           <div> {text}</div>
           <div> {icon}</div>
        </button>
        
    )
}