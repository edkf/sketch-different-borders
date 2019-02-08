import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
            box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    -webkit-text-rendering: optimizeLegibility;
    -moz-text-rendering: optimizeLegibility;
    -ms-text-rendering: optimizeLegibility;
    -o-text-rendering: optimizeLegibility;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
  }
`

export default GlobalStyle