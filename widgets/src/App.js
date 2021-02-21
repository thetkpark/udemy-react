import React from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'

const items = [
  {
    title: 'What is React?',
    content: 'React is a frontend JS framework'
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library'
  },
  {
    title: 'How do you use React?',
    content: 'By creating components'
  }
]

const App = () => {
  return (
    <div>
      {/* <Accordion items={items} /> */}
      <Search />
    </div>
  )
}

export default App
