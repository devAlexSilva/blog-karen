import Head from 'next/head'
import Layout from '../components/layout'
import PostsCenter from '../components/postsCenter'
import { getAllInPosts } from "../prismic/query"

export default function Blog({ dataPosts }) {

    return (
        <>
            <Layout>
                <Head><title>e.vearte - Blog</title></Head>
                <PostsCenter info={dataPosts} />
            </Layout>
        </>
    )
}

export const getServerSideProps = async () => {
    const dataPosts = await getAllInPosts();

    return {
        props: { dataPosts }
    }
}