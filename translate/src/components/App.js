import UserCreate from './UserCreate'
import { LanguageStore } from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext'
import LanguageSelector from './LanguageSelector'

const App = () => {
  return (
    <div className="ui container">
      <LanguageStore>
        <LanguageSelector />
        <ColorContext.Provider value="red">
          <UserCreate />
        </ColorContext.Provider>
      </LanguageStore>
    </div>
  )
}

// Use provider to wrap the components that use the context and pass the value
// Value that passed to provider is the value of the context
// Providers are independent of each other (Even it is the same context)

export default App
