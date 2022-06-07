import React from 'react'

const Avtar = () => {
    const description = "profile pic"
    const IMGsrc="https://media-exp1.licdn.com/dms/image/C5603AQGuMqYdSORPig/profile-displayphoto-shrink_800_800/0/1654231645854?e=1660176000&v=beta&t=3r9elzHWl24wSsA_g76ttAeVaw4ZgZkgdCQLg-9Q_Jw"
  return (
    <div>
        <h3>Avtar</h3>
        <img src={IMGsrc} alt={description} />
    </div>
  )
}

export default Avtar