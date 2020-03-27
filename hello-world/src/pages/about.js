import React from "react"
import { Link, graphql } from "gatsby"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import Layout from "../components/Layout"

import CombatPower from "../components/CombatPower"

export default ({ data }) => {
  return (
    <Layout>
      <div css={{ width: "90%", margin: "50px auto 0" }}>
        <div css={{ display: "flex", bolder: "1px solid #f3f3f3" }}>
          <div css={{ width: "60%" }}>
            <div>
              <h4>汎用機(Z/OS) + JCL + COBOLによるバックエンドの開発(3年)</h4>
              <p>
                開発環境は(今思えば)ものすごくレガシーだった。
                でも当時の開発体制は、がちがちのウォータフォールで、工程管理や成果物管理、テスト手法がとても厳格だった。
                生産性という観点ではとても悪かったけれども、大規模開発に向く開発手法を学ぶことができた。
              </p>
              <h4>よかった点</h4>
              <p>ああああああ</p>
            </div>
          </div>
          <div css={{ width: "40%" }}>
            <CombatPower
              front={0}
              backend={0}
              devOps={0}
              analyze={4}
              teamWork={4}
            />
          </div>
        </div>
        <div css={{ display: "flex", bolder: "1px solid #f3f3f3" }}>
          <div css={{ width: "60%" }}>
            <div>
              <h4>汎用機(Z/OS) + JCL + COBOLによるバックエンドの開発(3年)</h4>
              <p>
                開発環境は(今思えば)ものすごくレガシーだった。
                でも当時の開発体制は、がちがちのウォータフォールで、工程管理や成果物管理、テスト手法がとても厳格だった。
                生産性という観点ではとても悪かったけれども、大規模開発に向く開発手法を学ぶことができた。
              </p>
              <h4>よかった点</h4>
              <p>ああああああ</p>
            </div>
          </div>
          <div css={{ width: "40%" }}>
            <CombatPower
              front={0}
              backend={0}
              devOps={0}
              analyze={4}
              teamWork={4}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
