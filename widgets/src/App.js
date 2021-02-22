import React, { useState } from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/Dropdown'
import Translate from './components/Translate'

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

const options = [
  {
    label: 'The Color Red',
    value: 'red'
  },
  {
    label: 'The Color Green',
    value: 'green'
  },
  {
    label: 'A shade of blue',
    value: 'blue'
  }
]

const App = () => {
  const [selected, setSelected] = useState(options[0])

  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      {/* <Dropdown options={options} selected={selected} onSelectedChange={setSelected} /> */}
      <Translate />
    </div>
  )
}

export default App
