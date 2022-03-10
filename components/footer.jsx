import styles from '../styles/Footer.module.css'

export default function Footer(){
    return(
        <>
            <nav className={styles.nav}>
                <div className={styles.whats}><i className="fa-brands fa-whatsapp"></i></div>
                <div className={styles.insta}><i className="fa-brands fa-instagram"></i></div>
            </nav>
        </>
    )
}