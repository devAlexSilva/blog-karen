import styles from '../styles/HomeBlogPosts.module.css'
import { RichText } from "prismic-reactjs"
import { useRouter } from 'next/router'
import ImageOfBlog from './imageOfBlog'
import { useCallback, useState } from 'react'
import { getByTag } from '../prismic/query'

export default function HomeBlogPosts({ allPosts }) {
    const router = useRouter()

    let category = [];
    allPosts.map(item => category.push(item.tags[0]));
    category = [...new Set(category)];

    const [posts, setPosts] = useState(allPosts)

    const showPostsByTag = useCallback(tag => {
        const fetch = async () => {
            let results = await getByTag(tag);
            setPosts(results);
        }
        fetch();
    }, [])

    const showAllPosts = useCallback(()=>{setPosts(allPosts)},[])

    return (
        <div className={styles.layout_posts}>
            <header className={styles.header}>
                <div className={styles.home}>
                    <h1>Afim de ficar por dentro das novidades da e.vearte?
                        Confira nosso Blog e veja tudo
                    </h1>
                </div>
            </header>

            {!router.isFallback ? <>
                <main className={styles.main}>
                    <h4>Mais Recentes</h4>

                    <article className={styles.highlights}>
                        <div>
                            <ImageOfBlog
                                alt={allPosts[0].slugs[0]}
                                src={allPosts[0].data.image.url}
                                height={1000}
                                width={1000}
                            />
                        </div>
                        <div><RichText render={allPosts[0].data.name} /></div>
                        <div><RichText render={allPosts[0].data.content} /></div>
                    </article>

                </main>
                <aside className={styles.aside}>
                    {
                        posts.map((item) => {
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
                </aside>
                <nav className={styles.nav}>
                    <h3>tags</h3>
                    <ul className={styles.category}>
                        {category.map(tag => {
                            return (

                                <li key={tag}><button onClick={() => showPostsByTag(tag)}>{tag}</button></li>
                            )
                        })}
                        <li><button onClick={showAllPosts}>Todos</button></li>
                    </ul>
                </nav>

            </> : <div style={{
                display: 'grid', placeItems: 'center',
                fontSize: '5rem', height: '90vh'
            }}>loading...</div>
            }
        </div>
    )
}
