import styles from '../styles/Header.module.css'
import Link from 'next/link'

export default function Header() {
    return (
        <>
            <nav className={styles.nav}>
                <div className={styles.left}>
                    <Link href='/artes'>
                        <div><span>Artes &#10138;</span></div>
                    </Link>
                </div>
                <Link href='/'>
                    <div className={styles.center}><span>HOME</span></div>
                </Link>
                <div className={styles.right}>
                    <Link href='/blog'>
                        <div><span>Blog &#10138;</span></div>
                    </Link>
                </div>
            </nav>
        </>
    )
}