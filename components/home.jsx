import DataSection from "./dataSection"
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <>
            <section className={styles.section} id='home'>
                <DataSection textLeft={true} fieldToFetch={'home'} />
            </section>
        </>
    )
}