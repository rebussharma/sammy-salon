import React from "react"
import contents from '../../assets/data/services.json'


import '../../css/services/Services.css'
import Cards from "./Cards"
  
const Services:React.FC = () => {  
  return (
  <div className="services" id="services">
    <div className="our-services">
      <h1> Our Services </h1>
    </div>
    <div className="service-cards">
      {contents.map((content) => (<Cards content = {content} key={content.title}></Cards>))}
    </div>
  </div>
  )
}
export default Services