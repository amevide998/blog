import styles from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Comments (){

    const status = "authentication"

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Comments</h1>
            {
                (status === "authentication") ?
                    (
                        <div className={styles.write}>
                            <textarea placeholder={"write a comment for this article"} className={styles.input}/>
                            <button className={styles.button}>Send</button>
                        </div>
                    )
                    : (<Link href={"/login"}>Log in to comment</Link>)
            }
            <div className={styles.comments}>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image src={'/p1.jpeg'} alt={"profile"} width={50} height={50}/>
                        <div className={styles.userInfo}>
                            <span className={styles.username}>Michael Corleone</span>
                            <span className={styles.date}>11.02.2023</span>
                        </div>
                    </div>
                    <p className={styles.description}>
                        As I think, so I become, a creator of my own,
                        In this tapestry of life, I've beautifully sewn.
                        With every whisper of desire, every thought I see,
                        I craft my existence, for I am Spirit, wild and free.
                    </p>
                </div>

                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image src={'/p1.jpeg'} alt={"profile"} width={50} height={50}/>
                        <div className={styles.userInfo}>
                            <span className={styles.username}>Michael Corleone</span>
                            <span className={styles.date}>11.02.2023</span>
                        </div>
                    </div>
                    <p className={styles.description}>
                        As I think, so I become, a creator of my own,
                        In this tapestry of life, I've beautifully sewn.
                        With every whisper of desire, every thought I see,
                        I craft my existence, for I am Spirit, wild and free.
                    </p>
                </div>

                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image src={'/p1.jpeg'} alt={"profile"} width={50} height={50}/>
                        <div className={styles.userInfo}>
                            <span className={styles.username}>Michael Corleone</span>
                            <span className={styles.date}>11.02.2023</span>
                        </div>
                    </div>
                    <p className={styles.description}>
                        As I think, so I become, a creator of my own,
                        In this tapestry of life, I've beautifully sewn.
                        With every whisper of desire, every thought I see,
                        I craft my existence, for I am Spirit, wild and free.
                    </p>
                </div>

                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image src={'/p1.jpeg'} alt={"profile"} width={50} height={50}/>
                        <div className={styles.userInfo}>
                            <span className={styles.username}>Michael Corleone</span>
                            <span className={styles.date}>11.02.2023</span>
                        </div>
                    </div>
                    <p className={styles.description}>
                        As I think, so I become, a creator of my own,
                        In this tapestry of life, I've beautifully sewn.
                        With every whisper of desire, every thought I see,
                        I craft my existence, for I am Spirit, wild and free.
                    </p>
                </div>

                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image src={'/p1.jpeg'} alt={"profile"} width={50} height={50}/>
                        <div className={styles.userInfo}>
                            <span className={styles.username}>Michael Corleone</span>
                            <span className={styles.date}>11.02.2023</span>
                        </div>
                    </div>
                    <p className={styles.description}>
                        As I think, so I become, a creator of my own,
                        In this tapestry of life, I've beautifully sewn.
                        With every whisper of desire, every thought I see,
                        I craft my existence, for I am Spirit, wild and free.
                    </p>
                </div>

            </div>
        </div>
    )
}