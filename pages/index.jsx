import Head from 'next/head'
import Container from '../components/container'
import Home from '../components/home'
import Layout from '../components/layout'

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>Blog da Juvia</title>
      </Head>
      <Container>
        <Home />
        <section>section About / post</section>
        <section>section peça o seu / dinamic</section>
      </Container>
    </Layout>
  )
}
