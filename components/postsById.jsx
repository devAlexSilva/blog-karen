import styles from '../styles/PostsById.module.css'
import Head from "next/head"
import ImageOfBlog from "./imageOfBlog"
import Image from 'next/image'
import { RichText } from "prismic-reactjs"
import { useEffect, useState } from 'react'
import { getByUid } from '../prismic/query'

export default function PostsById({ allPosts, post }) {

    const [infoAllPosts, setInfoAllPosts] = useState([])
    const [dataHighLights, setDataHighLights] = useState([])

    useEffect(() => {
        const getData = async () => {
            const dataAllPosts = await getByUid(allPosts)
            setInfoAllPosts(dataAllPosts);
            const dataOnePost = await getByUid([post])
            setDataHighLights(dataOnePost)
        }
        getData()
    }, [allPosts, post])

    return (
        <>
            <Head>{`e.vearte - ${dataHighLights[0]?.uid}`}</Head>
            {dataHighLights[0] &&
                <div className={styles.layout_posts}>
                    <header className={styles.header}>
                            <Image
                                alt={`imagem para ${dataHighLights[0].slugs[0]}`}
                                src={dataHighLights[0].data.image.url}
                                layout='fill'
                            />
                    </header>
                    <div className={styles.main}>
                        <div className={styles.container}>
                            <article className={styles.highlights}>
                                <div>{RichText.render(dataHighLights[0].tags[0])}</div>
                                <div>{RichText.render(dataHighLights[0].data.name)}</div>
                                <div>{RichText.render(dataHighLights[0].data.content)}</div>
                            </article>
                        </div>
                    </div>

                    <h4>veja mais</h4>
                    <nav className={styles.nav_side}>
                        {
                            infoAllPosts.map((item) => {
                                return (
                                    <ul key={item.uid} className={styles.ul}>
                                        <li>{RichText.render(item.data.name)}</li>
                                        <li className={styles.img} style={{ cursor: 'pointer' }}>
                                            <ImageOfBlog
                                                alt={`imagem para ${item.uid}`}
                                                src={item.data.image.url}
                                                height={300}
                                                width={300}
                                                uid={item.uid}
                                            />
                                        </li>
                                        <li>{item.tags[0]}</li>
                                    </ul>
                                )
                            })
                        }
                    </nav>
                </div>



            }
        </>
    )
}
