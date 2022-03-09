import styles from '../styles/Home.module.css'
import { useEffect, useState } from "react"
import { getAllInDocument } from "../prismic/query"
import { RichText } from 'prismic-reactjs'
import Image from 'next/image'

export default function Home() {

    const [dataSection, setDataSection] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const dataInfoSection = await getAllInDocument('home');
            setDataSection(dataInfoSection[0].data);
        }
        fetchData();
    }, [])

    return (
        <>
            <section className={styles.section} id='home'>
                {dataSection.image &&
                    <div className={styles.image}>
                        <Image
                            alt="imagem teste"
                            width={dataSection.image?.dimensions.width}
                            height={dataSection.image?.dimensions.height}
                            src={dataSection?.image?.url}
                        />
                    </div>
                }
                <div className={styles.content}>
                    <div className={styles.h1}><RichText render={dataSection.title} /></div>
                     <div className={styles.p}><RichText render={dataSection.content} /></div> 
                </div>
            </section>
        </>
    )
}