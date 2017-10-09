import { SWITCH_THEME } from '../constants'

const defaultTheme = {}

const themeReducer = (state = defaultTheme, { type, payload }) => {
  switch (type) {
    case SWITCH_THEME:
      return payload
    default:
      return state
  }
}

export default themeReducer
