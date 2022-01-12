import { useState } from 'react'
import UserCreate from './UserCreate'

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
      <UserCreate />
    </div>
  )
}

export default App
