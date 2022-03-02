import './index.css'
import App from './app'
import Context from 'context'
import { StrictMode } from 'react'
import { render } from 'react-dom'
import reportWebVitals from './reportWebVitals'
import 'aos/dist/aos.css'

render(
  <StrictMode>
    <Context>
      <App />
    </Context>
  </StrictMode>,
  document.getElementById('root'),
)

reportWebVitals()
