import React from 'react'

import Card from './components/card'

function App() {
  //   var nome = prompt('Qual seu nome de usuário do GitHub?')

  return (
    <div className='wrapper'>
      <div className='forms'>
        <form className='animate-appear'>
          <label className='label'>Usuário GitHub</label>
          <input
            id='input'
            className='input'
            name='user'
            placeholder=' Digite um user no GitHub'
          />
          <button
            onClick={(githubName) => {
              let input = document.getElementById('input').value

              githubName = input
              //   console.log(userName)
            }}
            type='submit'
          >
            Pesquisar
          </button>
        </form>
      </div>
      <Card userName={githubName} />
    </div>
  )
}

export default App
