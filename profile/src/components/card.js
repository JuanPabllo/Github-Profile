import React, { useState, useEffect } from 'react'

function Card(props) {
  const [user, setUser] = useState({})

  useEffect(() => {
    async function fetchData() {
      let userName = props.userName // You can write your username here

      let devData = await fetch(`https://api.github.com/users/${userName}`)
        .then((res) => res.json())
        .then((data) => data)
      setUser(devData)
    }
    fetchData()
  }, [])

  return (
    <div className='card'>
      <div className='user-image'>
        <img src={user.avatar_url} alt='User Profile'></img>
      </div>

      <div className='user-info'>
        <div className='name'>{user.name}</div>
        <div className='handle'>@{user.login}</div>
        <div className='summary'>{user.bio}</div>
      </div>

      <div className='location'>{user.location}</div>
    </div>
  )
}

export default Card
