import { RichText } from 'prismic-reactjs'
import Image from 'next/image'
import styles from '../styles/HomeArtes.module.css'
import { useCallback, useState } from 'react'
import { getArtesByTag } from '../prismic/query'

export default function HomeArtes({ props }) {

    const [art, setArts] = useState(props);

    const getArtesByCategory = useCallback((tag) => {
        const fetch = async () => {
            let results = await getArtesByTag(tag);
            setArts(results);
        }
        fetch();
    }, [])

    const handleClickHeaderArts = useCallback(() => {
        setArts(props);
    }, [])


    return (
        <>
            <div className={styles.container}>
                <nav className={styles.nav}>
                    <ul className={styles.category}>
                        <li><button onClick={() => getArtesByCategory('lettering')}>lettering</button></li>
                        <li><button onClick={() => getArtesByCategory('desenho')}>desenho</button></li>
                        <li><button onClick={() => getArtesByCategory('pintura')}>pintura</button></li>
                        <li><button onClick={handleClickHeaderArts}>Todos</button></li>
                    </ul>
                </nav>
                <section className={styles.section}>
                    {
                        art.map(item => {
                            return (
                                <ul key={item.uid} className={styles.item}>
                                    <li>
                                        <Image
                                            src={item.data.image.url}
                                            width={item.data.image.dimensions.width}
                                            height={item.data.image.dimensions.height}
                                            layout='responsive'
                                            loading='lazy'
                                            alt='imagem da arte'
                                        />
                                    </li>
                                    <li><h3>{RichText.render(item.data.name)}</h3></li>
                                    <li>
                                        <span>
                                            Lorem ipsum dolor, sit amet consectetur
                                            adipisicing elit. Dolore ut officia placeat
                                        </span>
                                    </li>
                                </ul>
                            )
                        })
                    }
                </section>

                <div className={styles.container_wave}>
                    <div className={styles.wave}></div>
                    <div className={styles.wave}></div>
                    <div className={styles.wave}></div>
                </div>
            </div>
        </>
    )
}