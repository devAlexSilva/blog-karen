import Prismic from '@prismicio/client'

const endPoint = `https://${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/v2`;
const client = Prismic.client(endPoint);


export const getAllInDocument = async(fieldToFetch) => {
    const { results } = await client.query(Prismic.Predicates.at('document.type', fieldToFetch));
    return results;
}
//YAGNI *--*
export const getByUid = async (postsByUid)=>{
    const { results } = await client.query(Prismic.Predicates.any('my.posts.uid', postsByUid));
    return results;
}

export const getByTag = async (tag) => {
    const { results } = await client.query(Prismic.Predicates.at('document.tags', [tag]));
    return results;
}