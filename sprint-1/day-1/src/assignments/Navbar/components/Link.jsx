import React from 'react'

function Link(props) {
  return (
    <div style={{display:"flex", gap:"0px", marginTop:"5px",fontSize:"12px"}}>
        <a style={{textDecoration:"none",color:"white"}} href={props.address}> {props.text} </a>
    </div>
  )
}

export default Link 