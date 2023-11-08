"use client"
import styles from "./authLinks.module.css";
import Link from "next/link";
import {useState} from "react";
import {signOut} from "next-auth/react";

export default AuthLinks => {

    const status = "notauthenticated"

    const [open, setOpen] = useState(false);

    return (
        <>
            {
                status === "authenticated" ?
                    (
                        <Link href={"/auth/login"} className={styles.link}>Login</Link>
                    ):
                    (
                        <>
                            <Link href={"/write"}>Write</Link>
                            <span className={styles.link} onClick={signOut}>
                                Logout
                            </span>
                        </>
                    )
            }
            <div className={styles.burger}  onClick={()=> setOpen(!open)}>
                <div className={styles.line1}></div>
                <div className={styles.line2}></div>
                <div className={styles.line3}></div>
            </div>
            {
                open && (
                    <div className={styles.responsiveMenu}>
                        <Link href={"/"}>Homepage</Link>
                        <Link href={"/"}>Contact</Link>
                        <Link href={"/"}>About</Link>
                        {
                            status === "notauthenticated" ?
                                (
                                    <Link href={"/auth/login"}>Login</Link>
                                ):
                                (
                                    <>
                                        <Link href={"/write"}>Write</Link>
                                        <span className={styles.link}>
                                Logout
                            </span>
                                    </>
                                )
                        }
                    </div>
                )
            }
        </>
    )
}