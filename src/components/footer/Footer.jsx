import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";


export default function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.logo}>
                    <Image src={"/logo.png"} alt={""} width={50} height={50}/>
                </div>
                <h1 className={styles.logoText}>
                        <b>janjela</b>
                </h1>
                <p className={styles.description}>
                        The world of tech is constantly changing.
                        With this in mind,
                        we've compiled our top ten tech quotes to inspire you.
                </p>
                <div className={styles.icons}>
                    <Image src={'/facebook.png'} alt={'facebook logo '} width={18} height={18}/>
                    <Image src={'/instagram.png'} alt={'instagram logo '} width={18} height={18}/>
                    <Image src={'/tiktok.png'} alt={'tiktok logo '} width={18} height={18}/>
                    <Image src={'/youtube.png'} alt={'youtube logo '} width={18} height={18}/>

                </div>
            </div>
            <div className={styles.links}>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Links</span>
                    <Link href={"/"}>HomePage</Link>
                    <Link href={"/"}>Blog</Link>
                    <Link href={"/"}>About</Link>
                    <Link href={"/"}>Contact</Link>
                </div>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Tags</span>
                    <Link href={"/"}>Style</Link>
                    <Link href={"/"}>Coding</Link>
                    <Link href={"/"}>Travel</Link>
                    <Link href={"/"}>Fashion</Link>
                    <Link href={"/"}>Food</Link>
                    <Link href={"/"}>Culture</Link>
                </div>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Social</span>
                    <Link href={"/"}>Facebook</Link>
                    <Link href={"/"}>Instagram</Link>
                    <Link href={"/"}>Tiktok</Link>
                    <Link href={"/"}>Youtube</Link>
                </div>
            </div>
        </div>
    );
}