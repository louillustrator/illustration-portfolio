import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Navigation from "../components/navigation"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Navigation />
    <h1>Portfolio site</h1>
    <p>Here is some content</p>
    <Img fixed={data.file.childImageSharp.fixed} />

  </Layout>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "fisherman.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed{
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default IndexPage
