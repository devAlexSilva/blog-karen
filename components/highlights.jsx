import { RichText } from 'prismic-reactjs';
import { useEffect, useState } from 'react';
import { getAllInDocument } from '../prismic/query';
import styles from '../styles/HighLights.module.css'

export default function HighLights() {

    const [highlights, setHighlights] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const dataInfoHighLights = await getAllInDocument('products');
            setHighlights(dataInfoHighLights);
        }
        fetchData();
    }, []);

    return (
        <section className={styles.body} id='highlights'>
            <div className={styles.container}>
                <div className={styles.carroussel}>
                    {
                        highlights.map((item) => {
                            return (
                                <ul key={item.uid} className={styles.item}>
                                    <li><img alt={`imagem para ${item.uid}`} src={item.data.image.url} /></li>
                                    <li className={styles.name}>{item.data.name[0].text}</li>
                                </ul>
                            );
                        })
                    }
                </div>
            </div>
        </section>
    )
}