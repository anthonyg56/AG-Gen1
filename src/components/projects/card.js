import React from 'react'
import { Link } from 'gatsby'

const ProjectsCard = ({ photo, slug, title, x, y }) => {
    const style = {
        backgroundImage: `url(${photo})`,
        backgroundSize: `cover`,
        backgroundPosition: `${x} ${y}`
    }

    return (
        <div className="Projects-Card" id={title.split(' ').join('-')} style={style}>
            <Link to={`/projects/${slug}`}>
                <h1>View Project</h1>
                <h4>{ title }</h4>
            </Link>
        </div>
    )
}

export default ProjectsCard