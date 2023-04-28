import { createRoot } from 'react-dom/client'
import Routes from './Routes/Routes'
import GlobalStyle from './styles/global'

const root = createRoot(document.querySelector('#root'))
root.render(
  <>
    <Routes />
    <GlobalStyle />
  </>
)