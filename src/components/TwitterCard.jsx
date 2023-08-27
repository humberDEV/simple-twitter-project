/* eslint-disable react/prop-types */
import { useState  } from "react"

export function TwitterCard ( { userName, name, initialIsFollowing }) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    const imageSrc = `https://unavatar.io/${userName}`
    return(
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img
                className='tw-followCard-avatar'
                src={imageSrc}/>
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUser'>@{userName}</span>
                </div>
            </header>

            <aside> 
                <button className={ buttonClassName } onClick={ handleClick }>
                    { text }
                </button>
            </aside>
        </article>
    )
}