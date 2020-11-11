import React from 'react'

import Card from './components/card'
import Form from './components/form'

function App() {
  var nome = prompt('Qual seu nome de usuário do GitHub?')

  return (
    <div className='wrapper'>
      {/* <Form /> */}
      <Card userName={nome} />
    </div>
  )
}

export default App
