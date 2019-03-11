import React from 'react';

const ThreeComponent = props => {
  return (
    <div>
      <h1>Three Component</h1>
      <p>{props.song}</p>
      <p>{props.artist}</p>
      <p>{props.genre}</p>
    </div>
  )
}

export default ThreeComponent;