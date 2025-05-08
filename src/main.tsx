import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Import additional styles for DZESA site
import './scss/_site-custom.scss'

// Import custom scripts for DZESA site
// Note: Scripts are handled in the component or via index.html for libraries
import './js/scripts.js'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
