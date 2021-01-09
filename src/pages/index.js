import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Navigation from "../components/navigation"
import Gallery from "../components/gallery"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Navigation />
    <h1>Portfolio site</h1>
    <p>Here is some content</p>
    <Gallery />
  </Layout>
)

export default IndexPage
