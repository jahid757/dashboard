
import { createContext, useEffect, useState } from 'react'
import './assets/css/bootstrap.css'
import './assets/css/style.css'
import AppRoutes from './routes/Routes'

export const ThemeContext = createContext()

function App() {
  const [theme,setTheme] = useState('light');

  // toggle website theme
  useEffect(() => {
    document.body.className = ''
    document.body.classList.add(theme)
  },[theme])

  return (
    <ThemeContext.Provider value={[theme,setTheme]}>
      <AppRoutes/>
    </ThemeContext.Provider>
  )
}

export default App
