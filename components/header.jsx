import styles from '../styles/Header.module.css'
import Link from 'next/link'

export default function Header() {
    return (
        <>
            <nav className={styles.nav}>
                <div className={styles.left}>
                    <Link href='#highlights'>
                        <div>Destaques</div>
                    </Link>
                    <div style={{ cursor: 'default', border: 'none' }}>|</div>
                    <div>Produtos &#10138;</div>
                </div>
                <Link href='/'>
                    <div className={styles.center}>HOME</div>
                </Link>
                <div className={styles.right}>
                    <div>Blog &#10138;</div>
                    <div style={{ cursor: 'default', border: 'none' }}>|</div>
                    <Link href='#about'>
                        <div>Sobre</div>
                    </Link>
                </div>
            </nav>
        </>
    )
}