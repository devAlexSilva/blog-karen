import styles from '../styles/Footer.module.css'
import Link from 'next/link'

export default function Footer() {
    return (
        <>
            <nav className={styles.nav}>
                <Link href={'https://api.whatsapp.com/send?phone=+558487143982/'}>
                    <a target='_blank'>
                        <div><i className="fa-brands fa-whatsapp"></i></div>
                    </a>
                </Link>
                <Link href={'https://www.instagram.com/devalexyz/'}>
                    <a target='_blank'>
                        <div><i className="fa-brands fa-instagram"></i></div>
                    </a>
                </Link>
            </nav>
        </>
    )
}