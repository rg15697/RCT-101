import './App.css';
import React from "react"
import Navbar from "./components/Navbar"
import Offers from "./components/Offers";
import Filters from "./components/Filters";
import Restaurants from "./components/Restaurants"
import UserInfo from "./data/UserInfo.json"
import OffersData from './data/Offers.json';
import RestaurantsData from "./data/Restaurants.json";
const filters = {
  1:  "High to Low",
  2:  "Low to High",
  3:  "Ratings",
  4:  "Delivery Time",
  5:  "Relevance"
}

function App() {
    const [filterBy, setFilterBy] = React.useState("");
    const [data, setData] = React.useState(RestaurantsData);

    const updateFilter = (newFilter) =>{
        console.log(newFilter)
       switch(newFilter){
           case "2":{
               setFilterBy(2);
               data.sort((a,b) => a.costForTwo - b.costForTwo)
               setData([...data]);
      
               break;
           }
           case "1":{
            setFilterBy(1);
            data.sort((a,b) => b.costForTwo - a.costForTwo)
            setData([...data]);
 
            break;
           }
           default : {
               setData(RestaurantsData);
               break;
           }
       }
    }
  return (
    <div>
        <Navbar {...UserInfo.location} />
        <Offers offers={OffersData} />
        <section className="near-you">


            <Filters 
            currentFilterApplied={filterBy} 
            updateTheFilter={updateFilter} 
            filterTypes={filters}  />
            <Restaurants Restaurant={data} />
        </section> 
    </div>
  );
}

export default App;
