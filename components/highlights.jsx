import styles from '../styles/HighLights.module.css'
import { getAllInDocument } from '../prismic/query';
import { useEffect, useRef, useState } from 'react';

export default function HighLights({ field }) {

    const carousselRef = useRef(null);
    const [highlights, setHighlights] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const dataInfoHighLights = await getAllInDocument(field);
            setHighlights(dataInfoHighLights);
        }
        fetchData();
    }, []);

    const clickArrowLeft = () => {
        carousselRef.current.scrollLeft -= carousselRef.current.offsetWidth - (0.4 * carousselRef.current.offsetWidth);
    }
    const clickArrowRight = () => {
        carousselRef.current.scrollLeft += carousselRef.current.offsetWidth - (0.4 * carousselRef.current.offsetWidth);
    }

    return (
        <>
            <h2 className={styles.title_category} id='highlights'>DESTAQUES: {field.toUpperCase()}</h2>
            <section className={styles.body}>
                <div className={styles.container}>
                    <div className={styles.caroussel} ref={carousselRef}>
                        {
                            highlights.map((info) => {
                                return (
                                    <ul key={info.uid} className={styles.item}>
                                        <li><img loading='lazy' alt={`imagem para ${info.uid}`} src={info.data.image.url} /></li>
                                        <li className={styles.name}>{info.data.name[0].text}</li>
                                    </ul>
                                );
                            })
                        }
                    </div>

                    <div className={styles.arrows}>
                        <button className={styles.arrow_left} onClick={clickArrowLeft}>
                            <img src='/arrow-left.png' alt='button arrow left' style={{ width: '5rem', height: '5rem' }} />
                        </button>
                        <button className={styles.arrow_right} onClick={clickArrowRight}>
                            <img src='/arrow-right.png' alt='button arrow right' style={{ width: '5rem', height: '5rem' }} />
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}