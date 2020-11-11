import React from 'react'

function Form() {
  return (
    <form>
      <label>
        Nome de usuário:
        <input type='text' name='name' />
      </label>
      <input type='submit' value='Enviar' />
    </form>
  )
}

export default Form
