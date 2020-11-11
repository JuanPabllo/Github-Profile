import React from 'react'

import Card from './components/card'
import Form from './components/form'

function App() {
  var nome = prompt('Qual é o seu nome?')

  return (
    <div className='wrapper'>
      {/* <Form /> */}
      <Card userName={nome} />
    </div>
  )
}

export default App
