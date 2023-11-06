import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";


export default function Featured() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b>Hey, i'm hdscode</b><br/>
                Discover my stories and creative ideas
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src="/p1.jpeg" alt="post image" fill className={styles.postImage}/>
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}>I am Spirit, formless and free.
                        Whatever I think, that will I be.
                    </h1>
                    <p className={styles.postDescription}>
                        As I think, so I become, a creator of my own,
                        In this tapestry of life, I've beautifully sewn.
                        With every whisper of desire, every thought I see,
                        I craft my existence, for I am Spirit, wild and free.
                    </p>
                    <button className={styles.readMoreButton}>
                        Read More
                    </button>

                </div>
            </div>
        </div>
    );
}