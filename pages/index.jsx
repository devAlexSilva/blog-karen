import Head from 'next/head'
import Home from '../components/home'
import Layout from '../components/layout'
import HighLights from '../components/highlights'
import About from '../components/about'

export default function Index() {
  return (
    <>
      <Head><title>e.vearte - homePage</title></Head>
    <Layout>
        <Home />
        <HighLights field='products'/>
        <About />
        <HighLights field='posts'/>
    </Layout>
    </>
  )
}
