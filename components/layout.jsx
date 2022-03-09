import styles from '../styles/Layout.module.css'
import HeadMeta from "./headMeta"
import Header from "./header"

export default function Layout({ children }){
    return(
        <>
        <HeadMeta />
        <Header />
        <main className={styles.body}>{children}</main>
        </>
    )
}