import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";



export default function CategoryList() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Popular Category </h1>
            <div className={styles.categories}>
                <Link href={"blog?category=style"} className={`${styles.category} ${styles.style}`}>
                    <Image
                        src={"/style.png"}
                        alt={"style"}
                        width={32}
                        height={32}
                        className={styles.image}
                        />
                    Style
                </Link>
                <Link href={"blog?category=fashion"} className={`${styles.category} ${styles.fashion}`}>
                    <Image
                        src={"/fashion.png"}
                        alt={"style"}
                        width={32}
                        height={32}
                        className={styles.image}
                    />
                    fashion
                </Link>
                <Link href={"blog?category=food"} className={`${styles.category} ${styles.food}`}>
                    <Image
                        src={"/food.png"}
                        alt={"style"}
                        width={32}
                        height={32}
                        className={styles.image}
                    />
                    food
                </Link>
                <Link href={"blog?category=travel"} className={`${styles.category} ${styles.travel}`}>
                    <Image
                        src={"/travel.png"}
                        alt={"style"}
                        width={32}
                        height={32}
                        className={styles.image}
                    />
                    travel
                </Link>
                <Link href={"blog?category=culture"} className={`${styles.category} ${styles.culture}`}>
                    <Image
                        src={"/culture.png"}
                        alt={"style"}
                        width={32}
                        height={32}
                        className={styles.image}
                    />
                    culture
                </Link>
                <Link href={"blog?category=coding"} className={`${styles.category} ${styles.coding}`}>
                    <Image
                        src={"/coding.png"}
                        alt={"style"}
                        width={32}
                        height={32}
                        className={styles.image}
                    />
                    coding
                </Link>
            </div>
        </div>
    );
}