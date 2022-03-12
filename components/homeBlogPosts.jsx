import styles from '../styles/PostsCenter.module.css'
import Image from 'next/image'
import { RichText } from "prismic-reactjs"
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function HomeBlogPosts({ allPosts }) {
    const router = useRouter()

    return (
        <div className={styles.layout_posts}>
            {!router.isFallback ? <>
                <article className={styles.destaque}>
                    <Image
                        src={allPosts[0].data.image.url}
                        alt='image destaque'
                        height={1000}
                        width={1000}
                    />
                    <div><RichText render={allPosts[0].tags[0]} /></div>
                    <div><RichText render={allPosts[0].data.name} /></div>
                    <div><RichText render={allPosts[0].data.content} /></div>
                </article>

                <nav className={styles.nav_side}>
                    {
                        allPosts.map((item) => {
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
            </> : <div>loading...</div>
            }
        </div>
    )
}
