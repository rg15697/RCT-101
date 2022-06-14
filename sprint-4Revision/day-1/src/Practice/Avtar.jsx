import React from 'react'

const Avtar = ({person,size}) => {
    const description = "profile pic"
   
  return (
    <div>
        <h3>Avtar</h3>
        <img size={size} src={person.IMGsrc} alt={description} />
        <p>{person.name}</p>
    </div>
  )
}

export default Avtar