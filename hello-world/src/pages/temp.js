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
        <h1>WHO AM I?</h1>
        <div css={{ display: "flex", bolder: "1px solid #f3f3f3" }}>
          <div css={{ width: "60%" }}>
            <div>
              <h3>金融の基幹系システムのSE(7年)</h3>
              <p>
                メインフレームで稼働するシステムの製造を1年経験、その後3年は設計、製造をメインに行った。
              </p>
              <p>
                その後の1年は、Linux系のサーバー +
                クライアントで稼働するシステムの製造を1年程度経験した。
              </p>
              <p>
                最後の2年は大規模プロジェクトに参画し、1部門の業務内容の分析、および目指すべき業務フローの検討を行うなどの、要件定義をメインに行った。
              </p>
              <h4>学んだこと</h4>
              <ul>
                <li>
                  システム開発に必要な工程管理や成果物管理への理解、テスト手法
                </li>
                <li>大規模システムにおいて、各関係者と調整をしながら進め</li>
              </ul>
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
              <h3>クーポンサイト構築(4ヶ月)</h3>
              <p>
                クーポンを配布する管理画面作成のメンバーとして参画しフロント、及びバックエンドともに開発を行った。
                Webアプリケーションの経験はなかったが、参画前に自習を進めていたので、製造の際に大きく躓くことはなかった。
              </p>
              <p>
                しかし、Webアプリケーションの開発に自信もなかったことから主体性もなく、結合テストで炎上してしまった。
              </p>
              <h4>学んだこと</h4>
              <ul>
                <li>Vagrantを用いた開発環境の構築</li>
                <li>HTML + CSS</li>
                <li>Vue.js</li>
                <li>PHP(Laravel)</li>
                <li>git</li>
                <li>フロントのテストの難しさ</li>
                <li>
                  Webアプリケーション開発も基幹系業務システムも抑えるべき開発ポイントは同じということ
                </li>
              </ul>
            </div>
          </div>
          <div css={{ width: "40%" }}>
            <CombatPower
              front={0}
              backend={0}
              devOps={0}
              analyze={1}
              teamWork={2}
            />
          </div>
        </div>
        <div css={{ display: "flex", bolder: "1px solid #f3f3f3" }}>
          <div css={{ width: "60%" }}>
            <div>
              <h3>クーポンサイト保守(2ヶ月)</h3>
              <p>
                リリースしたクーポンサイトのバグ対応、仕様変更を対応していた。
                リクエストがタイムアウトしてしまう障害が発生し、原因が自分のサーバーの設定ミス(typo)ということが発覚したので泣いた。
                このことから、サーバーの設定は絶対に手動で行わないようにするため、設定ファイルもgitで管理することや、インフラ構成自体をコードで管理する手法を学んだ。
              </p>
              <h4>学んだこと</h4>
              <ul>
                <li>AWS(EC2、RDS、CloudFront、memcached、S3)の基本的な操作</li>
                <li>Nginx、php-fpmの設定</li>
              </ul>
            </div>
          </div>
          <div css={{ width: "40%" }}>
            <CombatPower
              front={0}
              backend={0}
              devOps={0}
              analyze={1}
              teamWork={2}
            />
          </div>
        </div>
        <div css={{ display: "flex", bolder: "1px solid #f3f3f3" }}>
          <div css={{ width: "60%" }}>
            <div>
              <h3>ポケモンサイト構築(1ヶ月)</h3>
              <p>
                サイト構築のフロント部分の作成と、開発環境周りの開発を担当した。今後別案件で本番環境もコードで管理できるようにするため、Ansibleを導入して開発環境の構築を行った。
              </p>
              <h4>学んだこと</h4>
              <ul>
                <li>Ansible</li>
              </ul>
            </div>
          </div>
          <div css={{ width: "40%" }}>
            <CombatPower
              front={0}
              backend={0}
              devOps={0}
              analyze={1}
              teamWork={2}
            />
          </div>
        </div>
        <div css={{ display: "flex", bolder: "1px solid #f3f3f3" }}>
          <div css={{ width: "60%" }}>
            <div>
              <h3>クーポンサイトデザインリニューアル(2ヶ月)</h3>
              <p>Nuxt</p>
              <h4>学んだこと</h4>
              <ul>
                <li>Ansible</li>
              </ul>
            </div>
          </div>
          <div css={{ width: "40%" }}>
            <CombatPower
              front={0}
              backend={0}
              devOps={0}
              analyze={1}
              teamWork={2}
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
