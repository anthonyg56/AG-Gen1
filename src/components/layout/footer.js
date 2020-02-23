import React from 'react'
import { Link } from 'gatsby'

import BackIcon from '../../images/Icons/Navigation/left-arrow.svg'

const Footer = ({ payload }) => {
    const { title } = payload

    if (payload.empty === false){
        const { index, length, next, previous, back } = payload

        const previousLink = previous === null ? null : <Link to={previous.url}><img src={BackIcon} alt={`back arrow icon to ${title}`} style={{transform: "translateY(8px)"}}/></Link>
        const nextLink = next === null ? null : <Link to={next.url}><img src={BackIcon} alt={`next arrow icon to ${next.url}`} style={{transform: "rotate(180deg) translateY(-8px)"}}/></Link>
        const goBack = back === null ? null : <Link to={back.url} id="Footer-Back"><img src={BackIcon} alt={`back arow icon to ${back.title}`}/>{back.title}</Link>

        return (
            <div className="Footer">
                <div className="Footer-Top">
                    { goBack }
                    <p id="index">{ index } / { length }</p>
                </div>
                <div className="Footer-Bottom">
                    <div className="Title">
                        <h4>{ title }</h4>
                    </div>
                    <div className="Page-Navigation">
                        { previousLink }
                        { nextLink }
                    </div>    
                </div>
            </div>
        )
    }
    
    return (
        <div className="Footer">
            <div className="Footer-Bottom">
                <div className="Title">
                    <h4>{ title }</h4>
                </div>  
            </div>
        </div>
    )
}

export default Footer