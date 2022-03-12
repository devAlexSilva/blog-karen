import styles from '../styles/PostsCenter.module.css'
import { RichText } from "prismic-reactjs"
import { useRouter } from 'next/router'
import ImageOfBlog from './imageOfBlog'

export default function HomeBlogPosts({ allPosts }) {
    const router = useRouter()

    return (
        <div className={styles.layout_posts}>
            {!router.isFallback ? <>
                <article className={styles.destaque}>
                    <ImageOfBlog
                        alt={allPosts[0].slugs[0]}
                        src={allPosts[0].data.image.url}
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
            </> : <div style={{
                display: 'grid', placeItems: 'center',
                fontSize: '5rem', height: '90vh'
            }}>loading...</div>
            }
        </div>
    )
}
