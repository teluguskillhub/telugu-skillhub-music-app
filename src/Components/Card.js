import React from 'react'

const Card = ({songs}) => {
    return (
        <div>
            <div className = "row" >
                    {songs.map(song =>{ 
                        return(
                            <div className = "col-md-3" key={song.id}>
                            <div className="card" style={{"width": "17.5rem"}} >
                            <img src={song.img} className="card-img-top" alt={song.title} />
                            <div className="card-body">
                                <h5 className="card-title">{song.title} - {song.movie}</h5>
                                <audio controls src={song.song} />
                            </div>
                            </div>
                            </div>
                        )})}
                </div>
        </div>
    )
}

export default Card
