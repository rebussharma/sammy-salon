import React from "react"
// import facial from '../../assets/services/facial.jpeg'
// import lashes from '../../assets/services/lashes.jpeg'
// import threading from '../../assets/services/threading.png'
// import tinting from '../../assets/services/tinting.jpeg'
// import waxing from '../../assets/services/waxing.jpeg'
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