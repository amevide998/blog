import React from "react";
import styles from "./singlePage.module.css"
import Menu from "@/components/Menu/Menu";
import Image from "next/image";

export default function SinglePage (){
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>
                        No Where House Is So Awesome
                    </h1>
                    <div className={styles.user}>
                        <div className={styles.userImageContainer}>
                            <Image src={'/p1.jpeg'} alt={''} fill className={styles.userImage}/>
                        </div>
                        <div className={styles.userTextContainer}>
                            <span className={styles.username}>
                                Michael Corleone
                            </span>
                            <span className={styles.date}>
                                11.02.2023
                            </span>
                        </div>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image src={'/p1.jpeg'} alt={''} fill className={styles.image}/>
                </div>
            </div>
            <div className={styles.content}>
            <div className={styles.post}>
                <div className={styles.description}>
                    <p>
                        As I think, so I become, a creator of my own,
                        In this tapestry of life, I've beautifully sewn.
                        With every whisper of desire, every thought I see,
                        I craft my existence, for I am Spirit, wild and free.
                    </p>
                    <h2>
                        Nothing is imposibble
                    </h2>
                    <p>
                        As I think, so I become, a creator of my own,
                        In this tapestry of life, I've beautifully sewn.
                        With every whisper of desire, every thought I see,
                        I craft my existence, for I am Spirit, wild and free.
                    </p>
                    <p>
                        As I think, so I become, a creator of my own,
                        In this tapestry of life, I've beautifully sewn.
                        With every whisper of desire, every thought I see,
                        I craft my existence, for I am Spirit, wild and free.
                    </p>
                </div>
            </div>
                <Menu />
            </div>
        </div>
    )
}