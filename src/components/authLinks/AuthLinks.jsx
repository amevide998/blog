"use client"
import styles from "./authLinks.module.css";
import Link from "next/link";
import {useState} from "react";
import {signOut, useSession} from "next-auth/react";

export default function AuthLinks(){

    const {status} = useSession()
    const [open, setOpen] = useState(false);

    return (
        <>
            {
                status !== "authenticated" ?
                    (
                        <Link href={"/login"} className={styles.link}>Login</Link>
                    ):
                    (
                        <>
                            <Link href={"/write"}>Write</Link>
                            <span className={styles.link} onClick={async ()=> await signOut()}>
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
                            status !== "authenticated" ?
                                (
                                    <Link href={"/login"}>Login</Link>
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