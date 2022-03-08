import { RichText } from 'prismic-reactjs'
import getData from '../prismic/query'
import styles from '../styles/DataSection.module.css'
import { useEffect, useState } from 'react'

export default function DataSection({ fieldToFetch, textLeft }) {

    const [dataSection, setDataSection] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const dataInfoSection = await getData(fieldToFetch);
            setDataSection(dataInfoSection[0].data);
        }
        fetchData();
    }, [])

    return (
        <div className={styles.content}>
            <div className={styles.text}>
                {
                    textLeft === true ?
                        <>
                            <div className={styles.title}>
                                <RichText render={dataSection.title} />
                                <div className={styles.content}>
                                    <RichText render={dataSection.content} />
                                </div>
                            </div>
                            <div>
                                <img src={dataSection.image?.url} alt="imagem teste" className={styles.img} />
                            </div>
                        </>
                        :
                        <>
                            <div>
                                <img src={dataSection.image?.url} alt="imagem teste" className={styles.img} />
                            </div>
                            <div className={styles.title}>
                                <RichText render={dataSection.title} />
                                <div className={styles.content}>
                                    <RichText render={dataSection.content} />
                                </div>
                            </div>
                        </>
                }
            </div>

        </div>
    )
}