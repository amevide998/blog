import styles from './loginPage.module.css';

export default function loginPage () {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.socialButton}>
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