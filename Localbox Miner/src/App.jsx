
import { useContext } from 'react'
import './App.css'
import MidSection from './component/MidSection'
import Navbar from './component/Navbar'
import { ThemeContex } from './context/ThemeContex'


function App() {
  const { theme, ToggleThem } = useContext(ThemeContex)
  console.log(theme)

  return (
    <>
      <div style={{ backgroundColor: theme === "light" ? "rgb(160, 155, 138)" : "rgb(56, 46, 37)", color: theme === "light" ? "rgb(56, 46, 37)" : "rgb(160, 155, 138)", height: "300px", width: "80%", margin: "auto", borderRadius: "10px" }}>
        <Navbar />
        <MidSection /><br />
        <button style={{ backgroundColor: theme === "light" ? "rgb(56, 46, 37)" : "rgb(160, 155, 138)", color: theme === "light" ? "rgb(160, 155, 138)" : "rgb(56, 46, 37)" }} onClick={ToggleThem}>ChangeTheme</button>
      </div>
    </>
  )
}

export default App
