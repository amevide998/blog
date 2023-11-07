import styles from './card.module.css';
import Image from "next/image";
import React from "react";
import Link from "next/link";

export const Card = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src={'/p1.jpeg'} alt={''} fill className={styles.postImage}/>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>
                        11.02.2023
                    </span>
                    &nbsp;-&nbsp;
                    <span className={styles.category}>
                        CULTURE
                    </span>
                </div>
                <Link href={'/blog'}>
                    <h1 className={styles.cardTitle}>I am Spirit, formless and free
                    </h1>
                </Link>

                <p className={styles.cardDescription}>
                    As I think, so I become, a creator of my own,
                    In this tapestry of life, I've beautifully sewn.
                    With every whisper of desire, every thought I see,
                    I craft my existence, for I am Spirit, wild and free.
                </p>
                <Link href={'/href'} className={styles.readMoreLink}>
                    Read More
                </Link>
            </div>
        </div>
    )
}