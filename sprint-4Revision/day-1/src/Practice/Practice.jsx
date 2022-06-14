import React from 'react'
import Avtar from './Avtar'

const Practice = () => {
    const IMGsrc="https://media-exp1.licdn.com/dms/image/C5603AQGuMqYdSORPig/profile-displayphoto-shrink_800_800/0/1654231645854?e=1660176000&v=beta&t=3r9elzHWl24wSsA_g76ttAeVaw4ZgZkgdCQLg-9Q_Jw"
  return (
    <div>Practice
        <Avtar 
        size={200}
        person={{name:"Aaro",
        imgSRC:{IMGsrc}}} />
    </div>
  )
}

export default Practice