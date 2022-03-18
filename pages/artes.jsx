import Head from 'next/head'
import HomeArtes from '../components/homeArtes'
import Layout from '../components/layout'
import { getAllInDocument } from '../prismic/query'

export default function Artes({ data }) {
    return (
        <>
            <Head><title>e.vearte - Artes</title></Head>
            <Layout>
                <HomeArtes props={ data }/>
            </Layout>
        </>
    )
}

export async function getServerSideProps(){
    const data = await getAllInDocument('products');
    
    return {
        props: { data }
    }
}