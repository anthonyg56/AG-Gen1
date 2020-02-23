import React from 'react'
import { Link } from 'gatsby'

import Layout from "../../components/layout/layout"
import SEO from "../../components/misc/seo"
import BackgroundImg from '../../components/misc/backgroundImage'

import CreativityIcon from '../../images/Icons/blog/creativity.svg'
import WebIcon from '../../images/Icons/blog/web.svg'
import FreelanceIcon from '../../images/Icons/blog/freelance.svg'
import AllIcon from '../../images/Icons/blog/all.svg'

const BlogPage = () => {
    const payload = {
        empty: true,
        title: "My Blog"
    }

    return (
        <Layout payload={payload}>
            <SEO title="Blog" />
            <BackgroundImg index={2} className="Blog">
                <div className="Container">
                    <div className="Title">
                        <h1>Everything Creativity, Freelance, & Web Development</h1>
                    </div>
                    <div className="Search">
                        <input type="text" placeholder="Search"/>
                    </div>
                    <div className="Blocks">
                        <Link to="/blog/creativity" className="Block" id="">
                            <img src={CreativityIcon} alt="creativity posts icon"/>
                            <h4>Creativity</h4>
                        </Link>
                        <Link to="/blog/web-development" className="Block" id="">
                            <img src={WebIcon} alt="web development posts icon"/>
                            <h4>Web Development</h4>
                        </Link>
                        <Link to="/blog/freelance" className="Block" id="">
                            <img src={FreelanceIcon} alt="freelance post icon" />
                            <h4>Freelance</h4>
                        </Link>
                        <Link to="/blog/all" className="Block" id="">
                            <img src={AllIcon} alt="all posts icon" />
                            <h4>All Posts</h4>
                        </Link>
                    </div>
                </div>
            </BackgroundImg>
        </Layout>
    )
}

export default BlogPage