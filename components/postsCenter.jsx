import styles from '../styles/PostsCenter.module.css'
import Image from 'next/image'
import { RichText } from "prismic-reactjs"

export default function PostsCenter({ info }) {
    return (
        <div className={styles.layout_posts}>
            <article className={styles.destaque}>
                <Image
                    src={info[0].data.image.url} 
                    alt='image destaque'
                    height={1000}
                    width={1000}
                />
                <div><RichText render={info[0].data.name} /></div>
                <div><RichText render={info[0].data.content} /></div>
            </article>

            <nav className={styles.nav_side}>
                {
                    info.map((item) => {
                        return (
                            <ul key={item.uid} className={styles.ul}>
                                <li><RichText render={item.data.name} /></li>
                                <li className={styles.img}>
                                    <Image
                                        loading='lazy'
                                        alt={`imagem para ${item.uid}`}
                                        src={item.data.image.url}
                                        width={300}
                                        height={300}
                                    />
                                    <li>{item.tags[0]}</li>
                                </li>
                            </ul>
                        )
                    })
                }
            </nav>
        </div>
    )
}
