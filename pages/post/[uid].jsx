import Layout from "../../components/layout"
import Head from "next/head"
import PostsById from "../../components/postsById"
import { getAllInDocument } from "../../prismic/query"

export default function Posts({ allPostsUid, postUid }) {
    return (
        <>
            <Head><title>e.vearte - posts</title></Head>
            <Layout>
                <PostsById allPosts={allPostsUid} post={postUid} />
            </Layout>
        </>
    )
}

export async function getServerSideProps({ params }) {
    const res = await getAllInDocument('posts');

    let allPostsUid = []
    res.map(item => allPostsUid.push(item.uid))
    const postUid = allPostsUid.find(item => item === params.uid)
    allPostsUid = allPostsUid.filter(item => item !== postUid)

    return {
        props: { allPostsUid, postUid }
    }
}