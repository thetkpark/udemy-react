import React, { useEffect, useState, useRef } from 'react'

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false)
  const ref = useRef()

  const onBodyClick = event => {
    if (ref.current && ref.current.contains(event.target)) return // Inside the dropdown conponent case
    setOpen(false)
  }

  useEffect(() => {
    document.body.addEventListener('click', onBodyClick, { capture: true })

    return () => {
      document.body.removeEventListener('click', onBodyClick)
    }
  }, [])

  const renderedOptions = options.map(option => {
    if (selected.value === option.value) return null
    return (
      <div className="item" key={option.value} onClick={() => onSelectedChange(option)}>
        {option.label}
      </div>
    )
  })

  return (
    <div className="ui form" ref={ref}>
      <div className="field">
        <label className="label">Select a color</label>
        <div
          className={`ui selection dropdown ${open ? 'visible active' : ''}`}
          onClick={() => setOpen(!open)}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dropdown
