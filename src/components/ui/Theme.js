import { createMuiTheme } from '@material-ui/core/styles'

const bpmGrey = "#2e2d2d"
const bpmWhite = "#fcfaf2"

export default createMuiTheme({
  palette: {
    common: {
      bpmGrey: bpmGrey,
      bpmWhite: bpmWhite
    },
    primary: {
      main: bpmGrey
    },
    secondary: {
      main: bpmWhite
    }
  }
})