import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeSections from "../components/home/homeSections"
import HomeLanding from "../components/home/homeLanding"
import WhyJoin from "../components/home/whyJoin"
import JoinCTA from "../components/home/joinCTA"


const IndexPage = () => (
  <Layout>
    <SEO title="India's Leading FOSS Club" />
    <HomeLanding />
    <div style={{ background: "#ffe", padding: "1rem" }} >
        <HomeSections />
        <WhyJoin />
        <JoinCTA />
    </div>
  </Layout>
)

export default IndexPage
