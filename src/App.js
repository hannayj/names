import React, { useEffect, useState } from 'react'
import Name from './components/Name'
import nameService from './services/names'

const App = () => {
  const [initialOrder, setInitialOrder] = useState([])
  const [names, setNames] = useState([])
  const [findName, setFindName] = useState('')

  useEffect(() => {
    nameService
      .getAll()
      .then(initialNames => {
        setNames(initialNames)
        setInitialOrder(initialNames)
      })
  }, [])

  const handleSortClick = () => {
    const sortedbyAmount = [...names]
    sortedbyAmount.sort((a, b) => b.amount - a.amount)
    //console.log(sortedNames)
    setNames(sortedbyAmount)
  }

  const handleAlphabeticalClick = () => {
    const sortedbyName = [...names]
    sortedbyName.sort(compare)
    //console.log(sortedbyName)
    setNames(sortedbyName)
  }

  function compare(a, b) {
    const nameA = a.name.toUpperCase()
    const nameB = b.name.toUpperCase()

    let comparison = 0
    if (nameA > nameB) {
      comparison = 1
    } else if (nameA < nameB) {
      comparison = -1
    }
    return comparison
  }

  const handleClearAllFilters = () => {
    setNames(initialOrder)
    setFindName('')
  }

  const handleFindName = (e) => {
    setFindName(e.target.value)
  }

  const nameToShow = findName === ''
    ? names
    : names.filter(n => n.name.toLowerCase().includes(findName.toLowerCase()))
  //console.log('name', nameToShow)

  return (
    <div>
      <h1>Names</h1>
      <button className='button' onClick={handleSortClick}>Sort by amount</button>
      <button className='button' onClick={handleAlphabeticalClick}>Sort by name</button>
      <button className='button' onClick={handleClearAllFilters}>Clear all filters</button>
      <p>See amount of specific name by typing it below:</p>
      <input
        className='input'
        value={findName}
        onChange={handleFindName}
        placeholder='Type here'
      />
      {nameToShow.length === 0
        ? <p>No names found try again</p>
        : nameToShow.map((name, i) =>
          <Name key={i} name={name} />
        )}
      <p>Total amount of all the names is {names.reduce((previous, current) => previous + current.amount, 0)}</p>

    </div>
  )
}

export default App;
