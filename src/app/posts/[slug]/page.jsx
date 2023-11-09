import React from "react";
import styles from "./singlePage.module.css"
import Menu from "@/components/Menu/Menu";
import Image from "next/image";
import Comments from "@/components/comments/comments";

const getData = async (slug) =>{

    try {
        const res = await fetch(
            `http:localhost:3000/api/posts/${slug}`
            , {
                cache: "no-store"
            })

        return res.json();

    }catch (err){
        console.log('opps ada error : ', err)
    }
}

export default async function SinglePage ({params}){

    const {slug} = params;
    const data = await getData(slug);

    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>{
                        data?.title
                    }
                    </h1>
                    <div className={styles.user}>
                        {data?.user?.image && <div className={styles.userImageContainer}>
                            <Image src={`${data?.user?.image}`} alt={`image of ${data.title}`} fill className={styles.userImage}/>
                        </div>}
                        <div className={styles.userTextContainer}>
                            <span className={styles.username}>
                                {data?.user?.name}
                            </span>
                            <span className={styles.date}>
                                {data?.createdAt.substring(0,10)}
                            </span>
                        </div>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image src={data?.img} alt={''} fill className={styles.image}/>
                </div>
            </div>
            <div className={styles.content}>
            <div className={styles.post}>
                <div className={styles.description} dangerouslySetInnerHTML={{__html: `${data.description}`}}/>
                <div className={styles.comment}>
                    <Comments postSlug={slug}/>
                </div>
            </div>
                <Menu />
            </div>
        </div>
    )
}