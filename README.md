# 読んだものメモ

基本的な使い方
https://www.gatsbyjs.org/docs/recipes/pages-layouts

- `yarn build`でデプロイ用リソースを作成する。
- `yarn serve`でおそらく public ディレクトリをドキュメントルートとした dev-server が起動する
- `pages`配下に、js を置くか、`gatsby-node.js`にページを作成する処理を書くかで、新しいページを作成することができる
- `Link`を使うと SPA 遷移となる。`a`タグだと、サーバアクセスするけど、対象の html も build 時に作られているので、問題なく参照できる。やばい。とはいえ、`a`タグだと、取得するリソースも多いし、Gatsby の preFetch(あんま理解してない)機能が生きないので、普通に SPA 遷移しよう。

なぜかチュートリアルを飛ばしてたので、つまみぐいしてく。
https://www.gatsbyjs.org/tutorial/

## Data Fetching

一番興味深い部分
https://www.gatsbyjs.org/tutorial/part-four/

コンポーネントに、GraphQL を直接書く。GraphQL チュートリアルで`Query`コンポーネントでラップされてると思うとわかりやすい。取得したデータは、props 経由で渡される。

```jsx
import React from "react";
import { Link, graphql } from "gatsby";

export default ({ data }) => {
  return (
    <div>
      <h1>{data.site.siteMetadata.title}</h1>
    </div>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
```

上記例は、PageQuery ってもので、ページ配下のものしか使えないとのこと。
`useStaticQuery`を使うとテンプレートとかでも使えるっぽ。

データの取得は、この例だと`yarn build`時に行われていて、`public/page-data/about/page-data.json`に取得結果が吐かれてた。SPA 遷移であれば、コンポーネントか、その json を取得してレンダリングしていると思われる。
HTML には、データが展開されてた。あれ、つまり SSR が実現されている？
外部通信する例も試したい。

## markdown をデータソースとして使う

GraphQL のツールにアクセスすると、Query に`allFile`、`file`っていうものがある。
参照してもからっぽなんだけど、`gatsby-source-filesystem`を導入するとなんかやばい。
ビルド時に指定したパス配下にあるファイルを GraphQL が参照できる形に変換してるっぽい。
結果`allFile`から参照できるようになる。

マークダウンをデータソースとして使う場合、`gatsby-transformer-remark`を使う。
流れ的にこんなかんじっぽい。
ファイル →`gatsby-source-filesystem`が FileNode を作る →`gatsby-transformer-remark`がさらに MarkDownRemarkNode をつくる。
AST 入門でやったように、コードを構文木で持たせると便利のように、木構造でデータをもってるんだね。

上記プラグインを設定するだけで、page コンポーネントから gql でデータをとってこれる。すごい。

一方、ブログの詳細ページのように、ページそのものをつくる場合、`gatsby-node.js`で`createPage`をする必要がある。

ページをつくるには、URL とデータと使うコンポーネントを決めるだけでいい。

```js
createPage({
  path: `/${dog.name}`,
  component: require.resolve(`./src/templates/dog-template.js`),
  context: { dog }
});
```

データをとってくるにあたって、build を流れをみると以下のようなっていた。

```
// 省略
success source and transform nodes ← ここで、FileNodeをつくったりしてる。後続にこのNodeからschemaをつくる処理があるはず
//省略
success createPages - 0.052s ←ここでPageをつくる
```

データは、createPage を実行する際には GraphQL の準備は整っていて、データを取得することができる。
仮に、GraphQL 側にデータを追加で持たせたい場合は以下の`onCreateNode`で Node にデータを追加することで対応できる。

以下は、ファイル名を MarkdownRemark の Node に追加している。
これにより createPage 時に、GraphQL を使ってファイル名を取得することができる！

```js
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = props => {
  const { node, getNode, actions } = props;
  const { createNodeField } = actions;

  // BabelのASTを思い出す
  // 対象のノードがMarkDownRemarkのときに処理をするよ
  if (node.internal.type === "MarkdownRemark") {
    // /my-first-page/

    // MarkDownRemarksNodeから、ファイル名を取得するヘルパ関数
    // どうやらMarkDownRemarksの親はFileNodeっぽい。ほんでDir情報とかもそっちにもってる
    // なので、ヘルパ関数を使わなくとも、以下で取得できる
    //   const fileNode = getNode(node.parent)
    //   console.log(fileNode.relativePath)
    const slug = createFilePath({ node, getNode, basePath: `pages` });

    // Nodeをさわるときは、専用の関数を使うんだよ
    // こうすると、filedsノードができて、その配下につくったnodeがぶらさがる
    createNodeField({
      node,
      name: "slug",
      value: slug
    });
  }
};
```

あとは、createPage するだけ。

```js
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
`);

result.data.allMarkdownRemark.edges.forEach(({ node }) => {
  createPage({
    path: node.fields.slug,
    // require()は、node.jsでファイルをここに展開しちゃう。require.resolve()は、ファイルの絶対パスを取得するだけ。
    component: require.resolve(`./src/templates/blog-post.js`),
    context: {
      // Data passed to context is available
      // in page queries as GraphQL variables.
      // これが不思議。記事を特定できるためのslugを渡して、ページ側で再度GraphQLを呼び出してる
      // ページの全情報をぶっこむのは悪手かしら。
      //　→結局buildフェーズで全部jsonになるんだからかわんない。であれば、keyだけ渡して、ペーズ側で必要な情報を取得するほうがわかりやすい
      slug: node.fields.slug
    }
  });
});
```

## ライフサイクル

これが一番知りたかった！
build→SSR→browser ってやってくれてる。
https://qiita.com/kikuchi_kentaro/items/985b182a78c3553981ee
https://www.gatsbyjs.org/docs/gatsby-lifecycle-apis/

とはいえ、SSR でなにやるんだろう。build フェーズで全部やっててやることあるのかね。
あー、別に SSR だからサーバサイドでなんかやるとかじゃなくって、build フェーズのひとつに SSR があるって思えばよさそう。
※ ↑ の Qiita のページに書いてあったね、、、、
https://medium.com/narative/understanding-gatsbys-lifecycle-31c473ba2f2d

```
gatby build の最後に、各ページを React Component として動作 ( renderToString ) させ、初期表示用の静的 HTML が生成される。
```

この処理は特別設定はいらなくって、デフォルトでやってくれてる。Redux を使いたいときに、Root コンポーネントをラップする処理を書くぐらいっぽい。

https://github.com/gatsbyjs/gatsby/blob/master/examples/using-redux/src/state/createStore.js

`gatsby-browser.js`と`gatsby-ssr.js`の両方の書く必要がありそう。
`gatsby-ssr.js`に書かないと、`yarn build`で store がねえぞっでこける。
NOSSR 的なオプションあるんかな。

ちなみに build で作成した html の値を直接変更して、ブラウザでみると、初回は html の値だけど、React が mount されたあとに書き換わることが確認できる。

## あとで使いたい

https://coliss.com/articles/build-websites/operation/javascript/react-components-for-scroll-into-the-viewport.html
