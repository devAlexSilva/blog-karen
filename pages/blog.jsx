import Head from 'next/head'
import Layout from '../components/layout'
import HomeBlogPosts from '../components/homeBlogPosts'
import { getAllInDocument } from "../prismic/query"

export default function Blog({ dataPosts }) {

    return (
        <>
            <Layout>
                <Head><title>e.vearte - Blog</title></Head>
                <HomeBlogPosts allPosts={dataPosts} />
            </Layout>
        </>
    )
}

export const getServerSideProps = async () => {
    const dataPosts = await getAllInDocument('posts');

    return {
        props: { dataPosts }
    }
}