import React from "react";
import styles from "./cardList.module.css";
import Pagination from "@/components/pagination/Pagination";
import Image from "next/image";
import {Card} from "@/components/card/Card";

const getData = async (page) =>{
    const res = await fetch(
        `http:localhost:3000/api/posts?page=${page}`
        , {
            cache: "no-store"
        })

    if(!res.ok){
        throw new Error("Failed")
    }

    return res.json();
}


export default async function CardList({page}) {

    const data = await getData(page);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                Recent Post
            </h1>
            <div className={styles.posts}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <Pagination />
        </div>
    );
}