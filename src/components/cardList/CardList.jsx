import React from "react";
import styles from "./cardList.module.css";
import Pagination from "@/components/pagination/Pagination";


export default function CardList() {
    return (
        <div className={styles.container}>
            cardlist
            <Pagination />
        </div>
    );
}