import React from 'react';

const TwoComponent = props => {
  return (
    <div>
      <h1>Two Component</h1>
      <p>{props.instrument}</p>
      <p>{props.band}</p>
      <p>{props.yearsPlayed}</p>

    </div>
  )
}

export default TwoComponent;