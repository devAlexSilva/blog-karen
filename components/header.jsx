import styles from '../styles/Header.module.css'
import Link from 'next/link'

export default function Header() {
    return (
        <nav className={styles.nav}>
            <div className={styles.left}>
                <div>aaaaa</div>
                <div>bbbbb</div>
                <div>ccccc</div>
            </div>
            <Link about='home' href='/'>
                <div className={styles.center}>HOME</div>
            </Link>
            <div className={styles.right}>
                <div>aaaaa</div>
                <div>bbbbb</div>
                <div>ccccc</div>
            </div>
        </nav>
    )
}