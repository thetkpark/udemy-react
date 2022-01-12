import { useState } from 'react'
import UserCreate from './UserCreate'
import LanguageContext from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext'

const App = () => {
  const [language, setLanguage] = useState('english')
  // const [color, setColor] = useState('read')

  const onLanguageChange = lang => {
    setLanguage(lang)
  }

  return (
    <div className="ui container">
      <div>
        Select a language
        <i className="flag us" onClick={() => onLanguageChange('english')} />
        <i className="flag nl" onClick={() => onLanguageChange('dutch')} />
      </div>
      <LanguageContext.Provider value={language}>
        <ColorContext.Provider value="red">
          <UserCreate />
        </ColorContext.Provider>
      </LanguageContext.Provider>
    </div>
  )
}

// Use provider to wrap the components that use the context and pass the value
// Value that passed to provider is the value of the context
// Providers are independent of each other (Even it is the same context)

export default App
