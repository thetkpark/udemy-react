import { useState } from 'react'
import UserCreate from './UserCreate'
import LanguageContext from '../contexts/LanguageContext'

const App = () => {
  const [language, setLanguage] = useState('english')

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
        <UserCreate />
      </LanguageContext.Provider>
    </div>
  )
}

// Use provider to wrap the components that use the context and pass the value

export default App
