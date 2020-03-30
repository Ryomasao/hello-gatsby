import React from "react"
import { Provider } from "react-redux"
//import { ParallaxProvider } from "react-scroll-parallax"
import { MDXProvider } from "@mdx-js/react"
import { RevealGlobalStyles } from "react-genie"
import { HotKeys, configure } from "react-hotkeys"

import createStore from "./src/state/createStore"
import MyParagraph from "./src/components/Paragraph"

// https://www.gatsbyjs.org/docs/mdx/customizing-components/
const components = {
  p: MyParagraph,
  //icons: Icons,
}

// https://github.com/greena13/react-hotkeys
const keyMap = {
  NEXT: "d",
  PREV: "a",
}

//configure({ ignoreRepeatedEventsWhenKeyHeldDown: false })

export default ({ element }) => {
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts
  const store = createStore
  return (
    <MDXProvider components={components}>
      <RevealGlobalStyles />
      <HotKeys keyMap={keyMap}>
        <Provider store={store}>{element}</Provider>
      </HotKeys>
    </MDXProvider>
  )
}
