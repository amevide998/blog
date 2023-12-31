import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "@/components/authLinks/AuthLinks";
import ThemeToggle from "@/components/themeToggle/ThemeToggle";


export default function Navbar() {
    return (
        <div className={styles.container}>
            <div className={styles.social}>
                <Image src={"/facebook.png"} alt={"facebook icon"} width={24} height={24} />
                <Image src={"/instagram.png"} alt={"instagram icon"} width={24} height={24} />
                <Image src={"/tiktok.png"} alt={"tiktok icon"} width={24} height={24} />
                <Image src={"/youtube.png"} alt={"youtube icon"} width={24} height={24} />
            </div>
            <div className={styles.logo}>janjela</div>
            <div className={styles.links}>
                <ThemeToggle />
                <Link href={"/"} className={styles.link}>Homepage</Link>
                <Link href={"/"} className={styles.link}>Contact</Link>
                <Link href={"/"} className={styles.link}>About</Link>
                <AuthLinks className={styles.link} />
            </div>
        </div>
    );
}