import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";
import prisma from "@/utils/connect";

const getData = async () =>{
    const res = await fetch(
        "http:localhost:3000/api/categories"
            , {
            cache: "no-store"
        })

    if(!res.ok){
        throw new Error("Failed")
    }

    return res.json();
}

export default async function CategoryList() {

    const data = await getData();
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Popular Category </h1>
            <div className={styles.categories}>
                {
                    data?.map((category)=>{
                       return (
                           <Link
                               href={`blog?category=${category.slug}`}
                               key={category._id}
                               className={`${styles.category} ${styles[category.slug]}`}>
                               <Image
                                   src={category.img}
                                   alt={`${category.slug}`}
                                   width={32}
                                   height={32}
                                   className={styles.image}
                               />
                               {category.slug}
                           </Link>
                       )
                    })
                }
            </div>
        </div>
    );
}