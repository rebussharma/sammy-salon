import React from "react"
import logo from '../../assets/logo.svg'
import '../../css/services/Services.css'
import Cards from "./Cards"
  
const Services:React.FC = () => {
  var contents = [
    {
      main_img: logo,
      title: 'string',
      description: 'string',
      cost: 30,
      time: 30,
      flip_img: 'string'
    },
    {
      main_img: logo,
      title: 'A',
      description: 'E',
      cost: 20,
      time: 20,
      flip_img: 'F'
    }
  ]
  
  return (
  <div className="services" id="services">Services we
    {contents.map((content) => (<Cards content = {content}></Cards>))}
  </div>
  )
}
export default Services