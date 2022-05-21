import React from 'react'
import List from "./components/List"
import MainHead from './components/MainHead'
function StaticCard() {
  return (
    <div style={{textAlign:"left"}}>
       <MainHead name="Mobile Operating System" />
       <ul> 
          <List name="Android" />
          <List name="Blackberry" />
          <List name="iPhone" />
          <List name="Window's Phone" />
       </ul>
       <MainHead name="Mobile Manufacturers" />
       <ul>
          <List name="Samsung" />
          <List name="HTC" />
          <List name="Micromax" />
          <List name="Apple" />
       </ul>
    </div>
  )
}

export default StaticCard

