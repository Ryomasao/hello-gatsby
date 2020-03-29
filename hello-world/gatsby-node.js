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
    const slug = node.fields.slug
    const component =
      slug === "/about/"
        ? "./src/templates/aboutTemplate.js"
        : "./src/templates/slideTemplate.js"
    createPage({
      path: slug,
      component: require.resolve(component),
      context: {
        slug: slug,
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
