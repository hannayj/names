import React, { useState } from 'react'
import Name from './components/Name'

const App = ({ names }) => {

  const [nameList, setNameList] = useState(names)
  const [findName, setFindName] = useState('')

  const handleSortClick = () => {
    const sortedbyAmount = [...nameList]
    sortedbyAmount.sort((a, b) => b.amount - a.amount)
    //console.log(sortedNames)
    setNameList(sortedbyAmount)
  }

  const handleAlphabeticalClick = () => {
    const sortedbyName = [...nameList]
    sortedbyName.sort(compare)
    //console.log(sortedbyName)
    setNameList(sortedbyName)
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
    setNameList(names)
    setFindName('')
  }

  const handleFindName = (e) => {
    setFindName(e.target.value)
  }

  const nameToShow = findName === '' 
    ? nameList 
    : nameList.filter(n => n.name.toLowerCase().includes(findName.toLowerCase()))
    //console.log('name', nameToShow)

  return (
    <div>
      <h1>Names</h1>
      <button onClick={handleSortClick}>Sort by amount</button>
      <button onClick={handleAlphabeticalClick}>Sort by name</button>
      <button onClick={handleClearAllFilters}>Clear all filters</button>
      <p>See amount of specific name by typing it below:</p>
      <input
        value={findName}
        onChange={handleFindName}
        placeholder='Type here'
      />
      {nameToShow.map((name, i) =>
        <Name key={i} name={name} />
      )}
      <p>Total amount of all the names is {nameList.reduce((previous, current) => previous + current.amount, 0)}</p>

    </div>
  )
}

export default App;
