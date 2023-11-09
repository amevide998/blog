"use client"
import styles from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";
import {useSession} from "next-auth/react";
import useSWR from "swr";
import {useState} from "react";

const fetcher = async (url) => {
    const res = await fetch(url);

    const data = await res.json()
    if(!res.ok){
        throw new Error(data.message)
    }

    return data;
};


export default function Comments ({postSlug}) {

    const status = useSession();

    const {data,mutate, isLoading} = useSWR(`http://localhost:3000/api/comments?postSlug=${postSlug}`, fetcher);

    const [description, setDescription] = useState("");

    const handleSubmit = async () => {

        if(description.trim() == ""){
            return alert("comment cannot be empty")
        }

        await fetch("http://localhost:3000/api/comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                postSlug,
                description,
            }),
        })

        await mutate();
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Comments</h1>
            {
                (status !== "authentication") ?
                    (
                        <div className={styles.write}>
                            <textarea
                                placeholder={"write a comment for this article"}
                                className={styles.input}
                                onChange={e=> setDescription(e.target.value)}
                            />
                            <button className={styles.button}
                                    onClick={handleSubmit}
                            >Send</button>
                        </div>
                    )
                    :
                    (
                        <div className={styles.write}>
                            <Link href={"/login"} className={styles.login}>Log in to comment</Link>
                        </div>
                    )
            }
            <div className={styles.comments}>
                {
                    isLoading? "loading..." : data?.map((item) => (
                        <div className={styles.comment} key={item._id}>
                            <div className={styles.user}>
                                <Image src={item?.user.image} alt={"profile"} width={50} height={50}/>
                                <div className={styles.userInfo}>
                                    <span className={styles.username}>{item?.user?.name}</span>
                                    <span className={styles.date}>{item?.createdAt.substring(0,10)}</span>
                                </div>
                            </div>
                            <p className={styles.description}>
                                {item?.description}
                            </p>
                        </div>
                    ))
                }
                {
                    !isLoading && (
                        data?.length === 0 && (
                            <div className={styles.comment}>
                                <p className={styles.description}>
                                    No comments yet
                                </p>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    )
}