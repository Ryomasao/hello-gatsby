const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ actions, graphql }) => {
  //createPageではnodeは参照できないよ。扱っているものが違うからね。
  // nodeはあくまでデータソースをスキーマに変換する際に使うんだ。

  console.log("createPage")

  const result = await graphql(`
    query {
      allMarkdownRemark {
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

  //console.log(JSON.stringify(result, null, 4))

  const { createPage } = actions
  // pull in or use whatever data
  const dogData = [
    {
      name: "Fido",
      breed: "Sheltie",
    },
    {
      name: "Sparky",
      breed: "Corgi",
    },
  ]

  dogData.forEach(dog => {
    //console.log("createPage", dog.name)
    createPage({
      path: `/${dog.name}`,
      component: require.resolve(`./src/templates/dog-template.js`),
      context: { dog },
    })
  })

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      // require()は、node.jsでファイルをここに展開しちゃう。require.resolve()は、ファイルの絶対パスを取得するだけ。
      component: require.resolve(`./src/templates/blog-post.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })
}

exports.onCreateNode = props => {
  const { node, getNode, actions } = props
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    console.log("onCreateNode")
    console.log(node.internal.type)
    const fileNode = getNode(node.parent)
    console.log(`\n`, fileNode.relativePath)
    // /my-first-page/
    const slug = createFilePath({ node, getNode, basePath: `content` })
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}
