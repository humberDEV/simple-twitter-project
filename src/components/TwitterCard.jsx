/* eslint-disable react/prop-types */
export function TwitterCard ( {userName, name, isFollowing}) {
    const imageSrc = `https://unavatar.io/${userName}`
    console.log(isFollowing)
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
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}