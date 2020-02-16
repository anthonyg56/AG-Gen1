import React from 'react'

import Layout from "../components/layout/layout"
import SEO from "../components/misc/seo"
import About from "../components/home/about"

const AboutPage = () => {
    const payload = {
        empty: false,
        title: "About Me",
        index: 2,
        length: 3,
        next: {
            url: "/skillset",
            title: "My Skillset"
        },
        previous: {
            url: "/",
            title: "Landing"
        },
        back: {
            url: "/",
            title: "Home"
        }
    }

    return (
        <Layout payload={payload}>
            <SEO title="About Me"/>
            <About />
        </Layout>
    )
}

export default AboutPage