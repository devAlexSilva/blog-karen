import { RichText } from 'prismic-reactjs'
import Image from 'next/image'
import styles from '../styles/HomeArtes.module.css'

export default function HomeArtes({ props }) {
    return (
        <>
            <div className={styles.container}>
                <nav className={styles.nav}>
                    <ul className={styles.category}>
                        <li><button>lettering</button></li>
                        <li><button>desenho</button></li>
                        <li><button>pintura</button></li>
                    </ul>
                </nav>
                <section className={styles.section}>
                    {
                        props.map(item => {
                            return (
                                <ul key={item.uid} className={styles.item}>
                                    <li>
                                        <Image
                                            src={item.data.image.url}
                                            width={item.data.image.dimensions.width}
                                            height={item.data.image.dimensions.height}
                                            layout='responsive'
                                            loading='lazy'
                                        />
                                        <li><h3>{RichText.render(item.data.name)}</h3></li>
                                        <li>
                                            <span>
                                                Lorem ipsum dolor, sit amet consectetur
                                                adipisicing elit. Dolore ut officia placeat
                                            </span>
                                        </li>
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