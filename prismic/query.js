import Prismic from '@prismicio/client'

const endPoint = 'https://blogkaren.prismic.io/api/v2';
const client = Prismic.client(endPoint);


export const getAllInDocument = async(fieldToFetch) => {
    const { results } = await client.query(Prismic.Predicates.at('document.type', fieldToFetch));
    return results;
}
