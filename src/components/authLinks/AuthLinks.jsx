import styles from "./authLinks.module.css";
import Link from "next/link";

export default AuthLinks => {

    const status = "notauthenticated"
    return (
        <>
            {
                status === "notauthenticated" ?
                    (
                        <Link href={"/auth/login"}>Login</Link>
                    ):
                    (
                        <>
                            <Link href={"/write"}>Write</Link>
                            <span className={styles.link}>
                                Logout
                            </span>
                        </>
                    )
            }

        </>
    )
}