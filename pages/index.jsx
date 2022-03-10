import Head from 'next/head'
import Home from '../components/home'
import Layout from '../components/layout'
import HighLights from '../components/highlights'
import About from '../components/about'
import SeparateSection from '../components/separateSection'

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>e.vearte - homePage</title>
      </Head>
        <Home />
        <SeparateSection />
        <HighLights field='products'/>
        <HighLights field='posts'/>
        <SeparateSection />
        <About />
    </Layout>
  )
}
