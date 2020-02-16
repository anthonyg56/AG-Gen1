import React from 'react'


import Layout from "../components/layout/layout"
import SEO from "../components/misc/seo"
import Services from "../components/home/services"

const SkillsetPage = () => {
    const payload = {
        empty: false,
        title: "Skillsets & Focus",
        index: 3,
        length: 3,
        next: null,
        previous: {
            url: "/about",
            title: "About Me"
        },
        back: {
            url: "/",
            title: "Home"
        }
    }

    return (
        <Layout payload={payload}>
            <SEO title="Skillsets" />
            <Services />
        </Layout>
    )
}

export default SkillsetPage