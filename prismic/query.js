import Prismic from '@prismicio/client'

const endPoint = 'https://blogkaren.prismic.io/api/v2';
const client = Prismic.client(endPoint);

const getData = async() => {
    const { results } = await client.query(Prismic.Predicates.at('document.type', 'home'));
    return results;
}
export default getData;