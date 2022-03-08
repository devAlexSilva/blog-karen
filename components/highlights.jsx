import styles from '../styles/HighLights.module.css'
import DataSection from './dataSection'

export default function HighLights() {
    return (
        <section className={styles.section} id='highlights'>
            <DataSection fieldToFetch={'home'} textLeft={false}/>
        </section>
    )
}