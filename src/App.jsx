import { useState } from 'react'
import { TwitterCard } from './components/TwitterCard'

const usersMock = [
    {
      "username": "humberDEV",
      "name": "Humberto Garía"
    },
    {
      "username": "enriquedlc",
      "name": "Enrique De La Concepción"
    },
    {
      "username": "midudev",
      "name": "Miguel Ángel Durán"
    },
    {
      "username": "pino",
      "name": "El Tio"
    },
    {
      "username": "ericoso",
      "name": "Eric Rodriguez"
    }
  ]

import './App.css'

export function App () {

    const [users, setUsers] = useState(usersMock) // => el useState recibe com primer parámetro el estado inicial

    console.log( setUsers )

    return(
        <div className="App">
            {
                users.map((user, index) => 
                    (
                        <TwitterCard key={index} name={user.name} userName={user.username} />
                    )
                )
            }

            {/* <CreateUser/> */}

        </div>
    )
}