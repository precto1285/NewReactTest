import React, { useState } from 'react';

const OneComponent = props => {
  const [artistState, setArtistState] = useState({
    one: {
      firstName: 'Phil',
      lastName: 'Recto',
      age: 41,
      artistTwo: false
    }
  })

  const buttonClickHandler = () => {
    const changeArtist = artistState.one.artistTwo;
    setArtistState({
      artistTwo: !changeArtist
    })
  }

  return (
    <div>
      {
        artistState.one.artistTwo ?

          <p>{artistState.one.firstName} {artistState.one.lastName}
            {artistState.one.age}</p>

          : null

      }
      < button onClick={buttonClickHandler} > Change Artist</button >

    </div>
  )
}

export default OneComponent;