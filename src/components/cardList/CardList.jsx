import React from "react";
import styles from "./cardList.module.css";
import Pagination from "@/components/pagination/Pagination";
import Image from "next/image";
import {Card} from "@/components/card/Card";

const getData = async (page, category) =>{

    try {
        const res = await fetch(
            `${process.env.HOST}/api/posts?page=${page}&category=${category || ""}`
            , {
                cache: "no-store"
            })

        return res.json();

    }catch (err){
        console.log('opps ada error : ', err)
    }
}


export default async function CardList({page, category}) {

    const {posts, count} = await getData(page, category)

    const POST_PER_PAGE = 2

    const hasPrev = page > 1;
    const hasNext = POST_PER_PAGE * page < count;

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                Recent Post
            </h1>
            <div className={styles.posts}>
                {
                    posts?.map((item) => (
                        <Card key={item._id} item={item}/>
                    ))
                }
            </div>
            <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext}/>
        </div>
    );
}