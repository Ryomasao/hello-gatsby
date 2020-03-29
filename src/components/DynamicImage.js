import React, { useMemo } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

// これをそのまま持ってきてる
// staticQueryに変数を渡して動的に組み立てることはできない
// https://github.com/gatsbyjs/gatsby/issues/10482

// 結局、imgタグ直接使うのと何が違うんだっけ。
// ・GraphQLから取得するイメージは、最適化されてるから軽いよ
// ・imageのlayzloadとかもしてくれてる
//  DynamicImageの場合も、最適化された画像が読む込み対象が列挙されていて、かつ画面サイズに合わせて変更できるようになってる
// http://kia-king.com/blog/tutorial/responsive-images-with-srcset/

// <picture>
//   <source srcset="/static/96387d2dfb223f8aa6b392f56bc5ff3a/5db04/react.png 75w,
// /static/96387d2dfb223f8aa6b392f56bc5ff3a/6d161/react.png 150w,
// /static/96387d2dfb223f8aa6b392f56bc5ff3a/630fb/react.png 300w,
// /static/96387d2dfb223f8aa6b392f56bc5ff3a/47683/react.png 367w" sizes="(max-width: 300px) 100vw, 300px" /><img loading="lazy" sizes="(max-width: 300px) 100vw, 300px" srcset="/static/96387d2dfb223f8aa6b392f56bc5ff3a/5db04/react.png 75w,
// /static/96387d2dfb223f8aa6b392f56bc5ff3a/6d161/react.png 150w,
// /static/96387d2dfb223f8aa6b392f56bc5ff3a/630fb/react.png 300w,
// /static/96387d2dfb223f8aa6b392f56bc5ff3a/47683/react.png 367w" src="/static/96387d2dfb223f8aa6b392f56bc5ff3a/630fb/react.png" alt="" style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/>
// </picture>

// remarks-imageを使ってると、このへんがHTMLに現れないからどうなってるのかよくわからん
// 試しにウインドウサイズを変えると読み込む画像がかわった。恐ろしい。

const Image = ({ src, ...props }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { internal: { mediaType: { regex: "images/" } } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const match = useMemo(
    () => data.allFile.edges.find(({ node }) => src === node.relativePath),
    [data, src]
  )

  return <Img fluid={match.node.childImageSharp.fluid} {...props} />
}

export default Image
