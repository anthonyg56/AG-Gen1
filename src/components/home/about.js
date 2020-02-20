import React from "react"

import BackgroundImg from '../misc/backgroundImage'
import MyPic from '../../images/me.jpeg'

const AboutMe = () => {
    return(
        <BackgroundImg index={0} className="About-Me">
            <div className="Container">
                <div className="Picture">
                    <img src={MyPic}/>
                </div>
                <div className="Body">
                    <div className="Header">
                        <h3>Vision, Creativity, Execution</h3>
                    </div>
                    <div className="Text">
                        <p>My name's Anthony Gayflor, and I'm a freelance web developer from Indianapolis, IN. Web development is how I utilize a passion for creativity and problem solving, helping brands and individuals turn a vision into a reality. I write code that gives clients power over their own websites; my product offers the full-range customization services found in traditional website creation, combined with the more modern experience of a content management system (or CMS) such as Wordpress. The products I develop are user-friendly, simple to manage, professionally designed, and quick in the browser. I work closely and purposefully with my clients, following the process of: </p>
                        <br />
                        <p>    1. <span style={{color: "#f5deb3"}}>Visualizing</span> the end goal we are working together to achieve</p>
                        <p>    2. <span style={{color: "#f5deb3"}}>Creatively</span> strategizing the best path to get there</p>
                        <p>    3. <span style={{color: "#f5deb3"}}>Executing</span> said plan, delivering an effective end product</p>
                        <br />
                        <p>We live in a day and age where it's more possible than ever to bring your ideas to life through the web. I want to be an asset for anyone with a desire to create something meaningful, with the determination to make their ideas reality. By working together, let’s help the world see your vision.</p>
                        <br />
                        <p>
                            Feel free to send me a message 
                            <a href="mailto:devgayflor@gmail.com">
                                <strong>devgayflor@gmail.com </strong>
                            </a>
                            for any inquiries about projects or assistance!
                        </p>
                    </div>     
                </div>
                   
            </div>
        </BackgroundImg>
    )
}

export default AboutMe