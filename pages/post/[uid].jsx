import Layout from "../../components/layout";
import PostsCenter from "../../components/postsCenter";
import { getAllInDocument } from "../../prismic/query";

export default function Posts({allPostsUid, postUid}) {
    return (
        <Layout>
            <PostsCenter allPosts={allPostsUid} post={postUid}/>
        </Layout>
    )
}

export async function getServerSideProps({ params }) {
    const res = await getAllInDocument('posts');

    let allPostsUid = []
    res.map(item => allPostsUid.push(item.uid))
    const postUid = allPostsUid.find(item => item === params.uid)
    allPostsUid =   allPostsUid.filter(item => item !== postUid)
    
    return {
        props: { allPostsUid, postUid }
    }
}