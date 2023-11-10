"use client"
import styles from './loginPage.module.css';
import {signIn, useSession} from "next-auth/react";
import {redirect} from "next/navigation";

export default function LoginPage () {
    const {data, status} = useSession()
    // const status = "authenticated"

    if(status === 'loading'){
        return (
            <div className={styles.loading}>
                Loading ...
            </div>
        )
    }
    else if (status === 'authenticated') {
        redirect('/')
    }
    else {
        return (
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.socialButton}
                         onClick={() => signIn("google")}
                    >
                        Continue With Google
                    </div>
                    <div className={styles.socialButton}>
                        Continue With Github
                    </div>
                    <div className={styles.socialButton}>
                        Continue With Facebook
                    </div>
                </div>
            </div>
        )
    }
}