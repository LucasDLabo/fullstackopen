import { useState } from 'react'
import Filter from './components/Filter'
import Form from './components/Form'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')

  const add = (event) => {
    event.preventDefault()
    const nameObject = {
      id: persons.length + 1,
      name: newName,
      number: newNumber
    }
    if (persons.some(person => person.name === newName)) {
      alert(newName + " is already added to phonebook")
      return
    }
    setPersons(persons.concat(nameObject))
    setNewName('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const [newNumber, setNewNumber] = useState('')
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const [search, setSearch] = useState('')

  const filteredPersons = persons.filter(person => 
    person.name.toLowerCase().includes(search.toLowerCase())
  )

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      
      <Filter search={search} handleSearchChange={handleSearchChange}/>

      <Form add={add} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}/>

      <h2>Numbers</h2>
      <Persons filteredPersons={filteredPersons}/>

    </div>
  )
}

export default App