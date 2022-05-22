import React from 'react'

const Filters = ({filterTypes,currentFilterApplied, updateTheFilter}) => {
    // console.log(filterTypes)
  return (
    <div className="container restaurants">
    <h1>50 restaurants</h1>
       <div className="restaurant-options">

       {
        Object.entries(filterTypes).map(([key,value]) =>{
            // console.log(key)
            return (
                <div 
                key={key} 
                onClick={()=>updateTheFilter(key)}
                className={`restaurant-option ${
                    currentFilterApplied ===value ? "underLine" : ""
                }`}>
           {value}
        </div>
            )
 
        })
       }
        {/* <div className="restaurant-option">
            Cost High to Lost
        </div>

        <div className="restaurant-option">
            Cost Lost to High
        </div>
        <div className="restaurant-option">
            Ratings
        </div>
        <div className="restaurant-option">
            Delivery Time
        </div>
        <div className="restaurant-option">
            Relevance
        </div> */}
        
    </div>
</div>
  )
}

export default Filters