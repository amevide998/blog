import React from "react";
import styles from "./blogPage.module.css";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/Menu/Menu";

export default function BlogPage ({searchParams}){
    const page = parseInt(searchParams.page) || 1;
    const category = searchParams.category || "";

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                {category}
            </h1>
            <div className={styles.content}>
                <CardList page={page} category={category}/>
                <Menu />
            </div>
        </div>
    )
}