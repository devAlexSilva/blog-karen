import styles from '../styles/About.module.css'
import DataSection from './dataSection'

export default function About() {
    return (
        <section className={styles.section} id='about'>
            <DataSection fieldToFetch={'home'} textLeft={false}/>
        </section>
    )
}