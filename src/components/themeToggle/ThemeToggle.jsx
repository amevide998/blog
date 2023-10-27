"use client"
import styles from "./themeToggle.module.css";
import Image from "next/image";
import {useState} from "react";
export default ThemeToggle => {

    const [toogleMode, setToggleMode] = useState("normal")

    const toggleHandler = () => {
        if(toogleMode === "normal"){
            setToggleMode("night")
        }else{
            setToggleMode("normal")
        }
    }

    return (
        <div className={styles.container} onClick={toggleHandler}>
            <Image src={"/moon.png"} alt={"moon icon"} width={12} height={12}/>
            <Image src={"/sun.png"} alt={"sun icon"} width={12} height={12}/>
            <div className={`${styles.circleToggle} ${toogleMode === "night" ? styles.right : styles.left}`}>
            </div>
        </div>
    );
}