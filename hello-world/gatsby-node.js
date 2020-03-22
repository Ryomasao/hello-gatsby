const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const mdx = await graphql(`
    query {
      allMdx {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  mdx.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: require.resolve(`./src/templates/slide-mdx.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}

exports.onCreateNode = props => {
  const { node, getNode, actions } = props
  const { createNodeField } = actions
  if (node.internal.type === "Mdx") {
    const slug = createFilePath({ node, getNode, basePath: `content` })
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}
