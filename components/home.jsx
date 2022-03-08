import styles from '../styles/Home.module.css'
import getData from '../prismic/query'
import { useEffect, useState } from 'react'
import { RichText } from 'prismic-reactjs'

export default function Home() {

    const [text, setText] = useState([])
    useEffect(() => {
        const test = async () => {
            const data = await getData();
            setText(data[0].data);
        }
        test();
    }, [])
    return (
        <>
            {console.log(text)}
            <section className={styles.section}>
                <div className={styles.content}>
                    <div className={styles.text}>
                        <div className={styles.title}><RichText render={text.title} />
                        <div className={styles.content}><RichText render={text.content} /></div>
                        </div>

                        <div>
                            <img src={text.image.url} alt="imagem teste" className={styles.img} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}