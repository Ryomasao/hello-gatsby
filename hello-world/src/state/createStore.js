import { createStore } from "redux"

const initialState = {
  counter: 10,
}

const reducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return { ...state, counter: state.counter + 1 }
  }
  return state
}

const store = createStore(reducer)

export default store
