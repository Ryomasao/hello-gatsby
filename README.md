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

## あとで使いたい

https://coliss.com/articles/build-websites/operation/javascript/react-components-for-scroll-into-the-viewport.html
