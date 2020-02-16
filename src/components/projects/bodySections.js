import React from 'react'

const BodySections = ({ index, projectDescription, contributionText, myToolsText }) => {
    const description = (
        <div
            className="Description Project-Section"
            dangerouslySetInnerHTML={{
                __html: projectDescription.childContentfulRichText.html
            }}
        />
    )

    const contribution = (
        <div
            className="Contribution Project-Section"
            dangerouslySetInnerHTML={{
                __html: contributionText.childContentfulRichText.html
            }}
        />
    )

    // const tools = (
    //     <div
    //         className="Tools Project-Section"
    //         dangerouslySetInnerHTML={{
    //             __html: myToolsText.childContentfulRichText.html
    //         }}
    //     />
    // )

    const sections = [
        description,
        contribution,
        //tools
    ]

    return sections[index]
}

export default BodySections