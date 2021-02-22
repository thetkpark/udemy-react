import React, { useState } from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/Dropdown'

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
  const [showDropdown, setShowDropdown] = useState(true)

  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
      {showDropdown ? (
        <Dropdown options={options} selected={selected} onSelectedChange={setSelected} />
      ) : null}
    </div>
  )
}

export default App
