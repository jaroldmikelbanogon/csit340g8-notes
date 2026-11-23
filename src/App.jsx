import { useState, useEffect } from 'react'
import { SettingsContext } from './SettingsContext.js'
import Notes from './components/Notes.jsx'
import Info from './components/Info.jsx'
 
function App() {
  const [largeText, setLargeText] = useState(() => {
    const saved = localStorage.getItem('setting')
    return saved ? JSON.parse(saved) : false
  })


  useEffect(() => {
    localStorage.setItem('setting', JSON.stringify(largeText))
  }, [largeText])
  return (
    <SettingsContext value={{ largeText, setLargeText }}>
      <div className="bg-[#f5f5f5] font-light text-[#111]">
        <Notes />
        <Info name="Juan Dela Cruz" />
      </div>
    </SettingsContext>
  )
}
 
export default App