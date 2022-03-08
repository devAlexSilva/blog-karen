import Head from 'next/head'
import Home from '../components/home'
import Layout from '../components/layout'
import HighLights from '../components/highlights'
import About from '../components/about'

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>Blog da Juvia</title>
      </Head>

        <Home />
        <About />
        <HighLights />
      
    </Layout>
  )
}
