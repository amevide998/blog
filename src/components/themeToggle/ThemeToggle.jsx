"use client"
import styles from "./themeToggle.module.css";
import Image from "next/image";
import {useContext} from "react";
import {ThemeContext} from "@/context/ThemeContext";
export default function ThemeToggle () {

    const {theme, toggle} = useContext(ThemeContext);

    return (
        <div className={styles.container} onClick={toggle}>
            <Image src={"/moon.png"} alt={"moon icon"} width={12} height={12}/>
            <Image src={"/sun.png"} alt={"sun icon"} width={12} height={12}/>
            <div className={`${styles.circleToggle} ${theme === "dark" ? styles.right : styles.left}`}>
            </div>
        </div>
    );
}