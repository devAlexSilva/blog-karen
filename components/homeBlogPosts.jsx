import styles from '../styles/HomeBlogPosts.module.css'
import { RichText } from "prismic-reactjs"
import { useRouter } from 'next/router'
import ImageOfBlog from './imageOfBlog'

export default function HomeBlogPosts({ allPosts }) {
    const router = useRouter()

    return (
        <div className={styles.layout_posts}>
            <header className={styles.header}>
                <div className={styles.home}>
                    <h1>Afim de ficar por dentro das novidades da e.vearte?
                        Confira nosso Blog e veja tudo
                    </h1>
                </div>
            </header>

            <main className={styles.main}>
                <h4 style={{
                    paddingTop: '5rem',
                    textAlign: 'center',
                    fontSize: '5rem',
                    opacity: '.8'
                }}>Mais Recentes</h4>
                <div className={styles.container}>
                    {!router.isFallback ? <>
                        <article className={styles.highlights}>
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
            </main>
        </div>
    )
}
