import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from "react"
import { getAllInDocument } from "../prismic/query"
import { RichText } from 'prismic-reactjs'

export default function Home() {

    const [dataSection, setDataSection] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const dataInfoSection = await getAllInDocument('home');
            setDataSection(dataInfoSection[0].data);
        }
        fetchData();
    }, [])

    return (
        <>
            <div className={styles.container}>
                <section className={styles.section} id='home'>
                    {dataSection.image &&
                        <div className={styles.image}>
                            <Image
                                alt="imagem teste"
                                width={dataSection.image.dimensions.width}
                                height={dataSection.image.dimensions.height}
                                src={dataSection.image.url}
                                priority
                            />
                        </div>
                    }
                    <div className={styles.content}>
                        <div className={styles.h1} >{RichText.render(dataSection.title)}</div>
                        <div className={styles.p}>{RichText.render(dataSection.content)}</div>
                        <Link href={'https://api.whatsapp.com/send?phone=+558487143982'}>
                            <button className={styles.btn_home}>Tire suas dúvidas</button>
                        </Link>
                    </div>
                </section>

                <aside className={styles.aside}>
                    <ul className={styles.ul}>
                        <li className={styles.li}>
                            <h2>lettering</h2>
                            <div className={styles.img}>
                                <img
                                    alt='imagem lettering'
                                    src='/fly_blog-removebg.png'
                                    loading='lazy'
                                />
                            </div>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Expedita possimus corrupti earum cum quaerat rerum odit dignissimos?
                            </span>
                        </li>
                        <li className={styles.li}>
                            <h2>pintura</h2>
                            <div className={styles.img}>
                                <img
                                    alt='imagem lettering'
                                    src='/fly_blog-removebg.png'
                                    loading='lazy'
                                />
                            </div>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Expedita possimus corrupti earum cum quaerat rerum odit dignissimos?
                                perferendis numquam illo a aut culpa.
                            </span>
                        </li>
                        <li className={styles.li}>
                            <h2>desenho</h2>
                            <div className={styles.img}>
                                <img
                                    alt='imagem lettering'
                                    src='/fly_blog-removebg.png'
                                    loading='lazy'
                                />
                            </div>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Exp
                                perferendis numquam illo a aut culpa.
                            </span>
                        </li>
                    </ul>
                </aside>
            </div>
        </>
    )
}