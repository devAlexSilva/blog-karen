import { RichText } from 'prismic-reactjs'
import Image from 'next/image'
import styles from '../styles/HomeArtes.module.css'
import { useCallback, useState } from 'react'
import { getByTag } from '../prismic/query'

export default function HomeArtes({ props }) {

    const [art, setArts] = useState(props);

    const getArtsByCategory = useCallback((tag) => {
        const fetch = async () => {
            let results = await getByTag(tag);
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
                        <li><button onClick={() => getArtsByCategory('lettering')}>lettering</button></li>
                        <li><button onClick={() => getArtsByCategory('desenho')}>desenho</button></li>
                        <li><button onClick={() => getArtsByCategory('pintura')}>pintura</button></li>
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
                                    <li>{RichText.render(item.data.name)}</li>
                                    <li>
                                            Lorem ipsum dolor, sit amet consectetur
                                            adipisicing elit. Dolore ut officia placeat
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