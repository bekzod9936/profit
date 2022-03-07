import './index.css'
import App from './app'
import 'aos/dist/aos.css'
import Context from 'context'
import { StrictMode } from 'react'
import { render } from 'react-dom'
import 'utils/fonts/GilroyBold.otf'
import 'utils/fonts/GilroyLight.otf'
import reportWebVitals from './reportWebVitals'

render(
  <StrictMode>
    <Context>
      <App />
    </Context>
  </StrictMode>,
  document.getElementById('root'),
)

reportWebVitals()
