import styles from './card.module.css';
import Image from "next/image";
import React from "react";
import Link from "next/link";

export const Card = ({key, item}) => {

    return (
        <div className={styles.container} key={key}>
            {
                item.img && (
                    <div className={styles.imgContainer}>
                        <Image src={item.img} alt={''} fill className={styles.postImage}/>
                    </div>
                )
            }
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>
                        {item.createdAt.substring(0,10)}
                    </span>
                    &nbsp;-&nbsp;
                    <span className={styles.category}>
                        {item.catSlug}
                    </span>
                </div>
                <Link href={`/posts/${item.slug}`}>
                    <h1 className={styles.cardTitle}>{item.title}
                    </h1>
                </Link>

                <p className={styles.cardDescription} dangerouslySetInnerHTML={{__html: `${item.description}`}}>
                    {/*{item.description.substring(0, 100)}*/}
                </p>
                <Link href={`/posts/${item.slug}`} className={styles.readMoreLink}>
                    Read More
                </Link>
            </div>
        </div>
    )
}