import React from "react"
import logo from '../../assets/home/logo.png'
import facial from '../../assets/services/facial.jpeg'
import lashes from '../../assets/services/lashes.jpeg'
import threading from '../../assets/services/threading.png'

import '../../css/services/Services.css'
import Cards from "./Cards"
  
const Services:React.FC = () => {
  var contents = [
    {
      main_img: threading,
      title: 'Eyebrow Threading',
      description: 'Threading Desc',
      cost: 10,
      time: '15 minutes',
      back_img: logo,
      back_essay: 'Threading essay'

    },
    {
      main_img: lashes,
      title: 'Lashes',
      description: 'Lashes Desc',
      cost: 15,
      time: '10 minutes',
      back_img: logo,
      back_essay: 'lash essay'   
    },
    {
      main_img: facial,
      title: 'Facial',
      description: 'Facial Desc',
      cost: 40,
      time: '30 minutes',
      back_img: logo,
      back_essay: 'Facial essay'
    }
  ]
  
  return (
  <div className="services" id="services">Services we
    {contents.map((content) => (<Cards content = {content} key={content.title}></Cards>))}
  </div>
  )
}
export default Services