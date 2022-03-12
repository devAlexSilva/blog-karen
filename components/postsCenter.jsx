import Head from "next/head";
import styles from '../styles/PostsCenter.module.css'
import Image from 'next/image'
import { RichText } from "prismic-reactjs"
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'
import { getByUid } from '../prismic/query'

export default function PostsCenter({ allPosts, post }) {
    const router = useRouter()

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
    }, [])

    return (
        <>
            <Head>{`e.vearte - ${dataHighLights[0]?.uid}`}</Head>
            {dataHighLights[0] &&
                <div className={styles.layout_posts}>
                    <article className={styles.destaque}>
                        <Image
                            src={dataHighLights[0].data.image.url}
                            alt='image destaque'
                            height={1000}
                            width={1000}
                        />
                        <div><RichText render={dataHighLights[0].tags[0]} /></div>
                        <div><RichText render={dataHighLights[0].data.name} /></div>
                        <div><RichText render={dataHighLights[0].data.content} /></div>

                    </article>
                    <nav className={styles.nav_side}>
                        {
                            infoAllPosts.map((item) => {
                                return (
                                    <ul key={item.uid} className={styles.ul}>
                                        <li><RichText render={item.data.name} /></li>
                                        <li className={styles.img} style={{ cursor: 'pointer' }}>
                                            <Link href={`/post/${item.uid}`}>
                                                <Image
                                                    loading='lazy'
                                                    alt={`imagem para ${item.uid}`}
                                                    src={item.data.image.url}
                                                    width={300}
                                                    height={300}
                                                />
                                            </Link>
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
