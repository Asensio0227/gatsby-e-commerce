import * as React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Reviews from '../components/Reviews';
import Seo from '../components/SEO'

export default function Home() {
  return (
    <Layout>
      <>
        <Seo title="home"/>
        <Hero />
        <Services />
        <Reviews/>
      </>
  </Layout>
  )
}
