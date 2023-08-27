/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { TwitterCard } from './components/TwitterCard'
import { NewUserForm } from './components/NewUserForm';

const usersMock = [
    {
      "username": "humberDEV",
      "name": "Humberto Garía",
      "initialIsFollowing": false
    },
    {
      "username": "enriquedlc",
      "name": "Enrique De La Concepción",
      "initialIsFollowing": false
    },
    {
      "username": "midudev",
      "name": "Miguel Ángel Durán",
      "initialIsFollowing": true
    },
    {
      "username": "god",
      "name": "Elon Musk",
      "initialIsFollowing": true
    },
    {
      "username": "github",
      "name": "Github Developer",
      "initialIsFollowing": false
    }
  ]

  import './App.css';

  export function App() {
    const [users, setUsers] = useState(usersMock);
  
    const addNewUser = (newUser) => {
      setUsers([...users, newUser]);
    }

    const printList = () => {
      return (
        users.map((user, index) => (
          <TwitterCard key={index} name={user.name} userName={user.username.toLowerCase()} initialIsFollowing={user.initialIsFollowing} />
        ))
      )
    }
  
    return (
      <div className="App">

        {printList()}
        <NewUserForm addNewUser={ addNewUser } />
      </div>
    );
  }