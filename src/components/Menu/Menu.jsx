import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";


export default function Menu() {
    return (
        <div className={styles.container}>
            <h2 className={styles.subTitle}>{`What's Hot`}</h2>
            <h1 className={styles.title}>Most Popular</h1>
            <div className={styles.items}>
                <Link href={"/"} className={styles.item}>
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.travel}`}>
                            Travel
                        </span>
                        <h3 className={styles.postTitle}>
                            some random text from heaven
                        </h3>
                        <div className={styles.detail}>
                            <span className={styles.username}>
                                Michael Corleone
                            </span>
                            {" - "}
                            <span className={styles.date}>
                                11.02.2023
                            </span>
                        </div>
                    </div>
                </Link>
                <Link href={"/"} className={styles.item}>
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.culture}`}>
                            Culture
                        </span>
                        <h3 className={styles.postTitle}>
                            some random text from heaven
                        </h3>
                        <div className={styles.detail}>
                            <span className={styles.username}>
                                Michael Corleone
                            </span>
                            {" - "}
                            <span className={styles.date}>
                                11.02.2023
                            </span>
                        </div>
                    </div>
                </Link>
                <Link href={"/"} className={styles.item}>
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.food}`}>
                            Food
                        </span>
                        <h3 className={styles.postTitle}>
                            some random text from heaven
                        </h3>
                        <div className={styles.detail}>
                            <span className={styles.username}>
                                Michael Corleone
                            </span>
                            {" - "}
                            <span className={styles.date}>
                                11.02.2023
                            </span>
                        </div>
                    </div>
                </Link>
                <Link href={"/"} className={styles.item}>
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.travel}`}>
                            Travel
                        </span>
                        <h3 className={styles.postTitle}>
                            some random text from heaven
                        </h3>
                        <div className={styles.detail}>
                            <span className={styles.username}>
                                Michael Corleone
                            </span>
                            {" - "}
                            <span className={styles.date}>
                                11.02.2023
                            </span>
                        </div>
                    </div>
                </Link>
            </div>

            <h2 className={styles.subTitle}>Discover by Topic</h2>
            <h1 className={styles.title}>Categories</h1>
            <div className={styles.categoryList}>
                <Link href={"/blog?category=style"} className={`${styles.categoryItem} ${styles.style}`}>
                    Style
                </Link>
                <Link href={"/blog?category=culture"} className={`${styles.categoryItem} ${styles.culture}`}>
                    Culture
                </Link>
                <Link href={"/blog?category=food"} className={`${styles.categoryItem} ${styles.food}`}>
                    Food
                </Link>
                <Link href={"/blog?category=coding"} className={`${styles.categoryItem} ${styles.coding}`}>
                    Coding
                </Link>
                <Link href={"/blog?category=fashion"} className={`${styles.categoryItem} ${styles.fashion}`}>
                    Fashion
                </Link>
                <Link href={"/blog?category=travel"} className={`${styles.categoryItem} ${styles.travel}`}>
                    Travel
                </Link>
            </div>


            <h2 className={styles.subTitle}>Choose by editor</h2>
            <h1 className={styles.title}>editor pick</h1>
            <div className={styles.items}>
                <Link href={"/"} className={styles.item}>
                    <div className={styles.imgContainer}>
                        <Image src={'/p1.jpeg'} alt={""} className={styles.image} fill />
                    </div>
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.travel}`}>
                            Travel
                        </span>
                        <h3 className={styles.postTitle}>
                            some random text from heaven
                        </h3>
                        <div className={styles.detail}>
                            <span className={styles.username}>
                                Michael Corleone
                            </span>
                            {" - "}
                            <span className={styles.date}>
                                11.02.2023
                            </span>
                        </div>
                    </div>
                </Link>
                <Link href={"/"} className={styles.item}>
                    <div className={styles.imgContainer}>
                        <Image src={'/p1.jpeg'} alt={""} className={styles.image} fill />
                    </div>
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.culture}`}>
                            Culture
                        </span>
                        <h3 className={styles.postTitle}>
                            some random text from heaven
                        </h3>
                        <div className={styles.detail}>
                            <span className={styles.username}>
                                Michael Corleone
                            </span>
                            {" - "}
                            <span className={styles.date}>
                                11.02.2023
                            </span>
                        </div>
                    </div>
                </Link>
                <Link href={"/"} className={styles.item}>
                    <div className={styles.imgContainer}>
                        <Image src={'/p1.jpeg'} alt={""} className={styles.image} fill />
                    </div>
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.food}`}>
                            Food
                        </span>
                        <h3 className={styles.postTitle}>
                            some random text from heaven
                        </h3>
                        <div className={styles.detail}>
                            <span className={styles.username}>
                                Michael Corleone
                            </span>
                            {" - "}
                            <span className={styles.date}>
                                11.02.2023
                            </span>
                        </div>
                    </div>
                </Link>
                <Link href={"/"} className={styles.item}>
                    <div className={styles.imgContainer}>
                        <Image src={'/p1.jpeg'} alt={""} className={styles.image} fill />
                    </div>
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.travel}`}>
                            Travel
                        </span>
                        <h3 className={styles.postTitle}>
                            some random text from heaven
                        </h3>
                        <div className={styles.detail}>
                            <span className={styles.username}>
                                Michael Corleone
                            </span>
                            {" - "}
                            <span className={styles.date}>
                                11.02.2023
                            </span>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}