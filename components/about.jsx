import styles from '../styles/About.module.css'
import { useEffect, useState } from "react"
import { getAllInDocument } from "../prismic/query"
import { RichText } from 'prismic-reactjs'
import Image from 'next/image'

export default function About() {

    const [dataSection, setDataSection] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const dataInfoSection = await getAllInDocument('about');
            setDataSection(dataInfoSection[0].data);
        }
        fetchData();
    }, [])

    return (
        <>
            <section className={styles.section} id='about'>
                {dataSection.image &&
                    <div className={styles.image}>
                        <Image
                            alt="imagem teste"
                            width={dataSection.image?.dimensions.width}
                            height={dataSection.image?.dimensions.height}
                            src={dataSection?.image?.url}
                            loading='lazy'
                        />
                    </div>
                }
                <div className={styles.content}>
                    <div className={styles.h1}>{RichText.render(dataSection.title)}</div>
                    <div className={styles.p}>{RichText.render(dataSection.content)}</div>
                </div>
            </section>
        </>
    )
}