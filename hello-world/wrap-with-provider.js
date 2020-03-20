import React from "react"
import { Provider } from "react-redux"
import { ParallaxProvider, Parallax } from "react-scroll-parallax"

import createStore from "./src/state/createStore"

export default ({ element }) => {
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts
  const store = createStore
  return (
    <ParallaxProvider>
      <Provider store={store}>{element}</Provider>
    </ParallaxProvider>
  )
}
