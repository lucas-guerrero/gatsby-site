const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const indexTemplate = path.resolve(`src/pages/index.js`)
    const spectacleTemplate = path.resolve(`src/pages/spectacle.js`)
    const resumeTemplate = path.resolve(`src/pages/resume.js`)
  
    createPage({
        path: `/`,
        component: indexTemplate
    })

    createPage({
        path: `/spectacle`,
        component: spectacleTemplate
    })

    createPage({
        path: `/resume`,
        component: resumeTemplate
    })
}