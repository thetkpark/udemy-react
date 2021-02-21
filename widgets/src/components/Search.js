import React, { useEffect, useState } from 'react'

const Search = () => {
  const [term, setTerm] = useState('')

  useEffect(() => {
    console.log('I Only run once')
  }, [])
  // [] -> Run at initial render only
  // no args -> + run after every rerender
  // [vars] -> + run after every rerender if data has changed

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label> Enter Search Term</label>
          <input className="input" value={term} onChange={e => setTerm(e.target.value)} />
        </div>
      </div>
    </div>
  )
}

export default Search
