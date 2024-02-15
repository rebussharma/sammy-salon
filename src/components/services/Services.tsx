import React from "react"
import logo from '../../assets/home/logo.png'
import facial from '../../assets/services/facial.jpeg'
import lashes from '../../assets/services/lashes.jpeg'
import threading from '../../assets/services/threading.png'
import tinting from '../../assets/services/tinting.jpeg'
import waxing from '../../assets/services/waxing.jpeg'


import '../../css/services/Services.css'
import Cards from "./Cards"
  
const Services:React.FC = () => {
  var contents = [
    {
      main_img: threading,
      title: 'Threading',
      cost: 10,
      time: '15 mins',
      back_img: logo,
      back_essay: 'Threading essay',
      mini_content:[
        {
          title:"Eyebrow",
          cost:10,
          time: "5 mins"
        },
        {
          title:"Upper-Lip",
          cost:15,
          time: "5 mins"
        },
        {
          title:"Chin",
          cost:25,
          time: "5 mins"
        },
        {
          title:"Fore-head",
          cost:55,
          time: "5 mins"
        },
        {
          title:"Full-Face",
          cost:35,
          time: "5 mins"
        }
        
      ]

    },
    {
      main_img: lashes,
      title: 'Lashes',
      cost: 15,
      time: '10 mins',
      back_img: logo,
      back_essay: 'lash essay',
      mini_content:[
        {
          title:"Extentions",
          cost:10,
          time: "35 mins"
        },
        {
          title:"Individual Extentions",
          cost:15,
          time: "25 mins"
        }
      ]   
    },
    {
      main_img: facial,
      title: 'Facial',
      cost: 40,
      time: '30 mins',
      back_img: logo,
      back_essay: 'Facial essay',
      mini_content:[
        {
          title:"Hydra Facil",
          cost:50,
          time: "55 mins"
        },
        {
          title:"Diamond",
          cost:55,
          time: "65 mins"
        }
      ] 
    },
    {
      main_img: waxing,
      title: 'Waxing',
      cost: 40,
      time: '30 mins',
      back_img: logo,
      back_essay: 'Facial essay',
      mini_content:[
        {
          title:"Uder Arms",
          cost:10,
          time: "25 mins"
        },
        {
          title:"Legs",
          cost:15,
          time: "15 mins"
        }
      ]
    },
    {
      main_img: tinting,
      title: 'Tinting',
      cost: 40,
      time: '30 mins',
      back_img: logo,
      back_essay: 'Tinting essay',
      mini_content:[
        {
          title:"Single Brow",
          cost:10,
          time: "25 mins"
        },
        {
          title:"Both Brow",
          cost:15,
          time: "15 mins"
        }
      ]
    }
  ]
  
  return (
  <div className="services" id="services">
    {contents.map((content) => (<Cards content = {content} key={content.title}></Cards>))}
  </div>
  )
}
export default Services