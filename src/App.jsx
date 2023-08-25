import './App.css'
import { TwitterCard } from './components/TwitterCard'

export function App () {
    return(
        <div className="App">
            <TwitterCard userName={'humberDEV'} name={'Humberto García'} isFollowing/>
            <TwitterCard userName={'enriquedlc'} name={'Enrique de la Concepción'} isFollowing/>
            <TwitterCard userName={'midudev'} name={'Miguel Ángel Durán'} isFollowing={false}/>
        </div>
    )
}