import React from "react"
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
      cost: 5,
      time: '15 mins',
      back_essay: 'Threading is done using a thread. It is better than waxing',
      mini_content:[
        {
          title:"Eyebrow Threading",
          cost:10,
          time: "5 mins"
        },
        {
          title:"Eyebrow Shaping",
          cost:10,
          time: "5 mins"
        },
        {
          title:"Eyebrow Lamination",
          cost:55,
          time: "5 mins"
        },
        {
          title:"Upper-Lip",
          cost:5,
          time: "5 mins"
        },
        {
          title:"Chin",
          cost:5,
          time: "5 mins"
        },
        {
          title:"Forehead",
          cost:5,
          time: "5 mins"
        },
        {
          title:"Cheek-Sideburns",
          cost:15,
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
      cost: 20,
      time: '10 mins',
      back_essay: 'Done using equiptments. Lasts for 1 month',
      mini_content:[
        {
          title:"Individual Extentions",
          cost:100,
          time: "35 mins"
        },
        {
          title:"Cluster Extentions",
          cost:50,
          time: "25 mins"
        },
        {
          title:"Lashes Lifts",
          cost:65,
          time: "25 mins"
        }
        ,
        {
          title:"Lashes Tintings",
          cost:30,
          time: "25 mins"
        }
      ]   
    },
    {
      main_img: facial,
      title: 'Facial',
      cost: 40,
      time: '30 mins',
      back_essay: 'Ease up your face. Exfoliate it and let it breathe',
      mini_content:[
        {
          title:"Hydra Facial",
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
      cost: 15,
      time: '30 mins',
      back_essay: 'Easy waxing procedure that doesn not hurt. You will be good for 1 month',
      mini_content:[
        {
          title:"Uder Arms",
          cost:10,
          time: "25 mins"
        },
        {
          title:"Belly Wax",
          cost:15,
          time: "25 mins"
        },
        {
          title:"Bikini Line",
          cost:30,
          time: "25 mins"
        },
        {
          title:"Brazilian",
          cost:50,
          time: "25 mins"
        },
        {
          title:"Butt Wax",
          cost:20,
          time: "25 mins"
        },
        {
          title:"Chest Wax",
          cost:10,
          time: "25 mins"
        },
        {
          title:"Full Arms",
          cost:40,
          time: "25 mins"
        },
        {
          title:"Half Arms",
          cost:25,
          time: "25 mins"
        },
        {
          title:"Full Back",
          cost:50,
          time: "25 mins"
        },
        {
          title:"Full Body",
          cost:200,
          time: "15 mins"
        },
        {
          title:"Full legs",
          cost:60,
          time: "25 mins"
        },
        {
          title:"Half leg",
          cost:30,
          time: "25 mins"
        }
      ]
    },
    {
      main_img: tinting,
      title: 'Tinting',
      cost: 40,
      time: '30 mins',
      back_essay: 'Tinting brows to make them look darker in shade. It lasts up to 1 month',
      mini_content:[
        {
          title:"Brow Tinting",
          cost:20,
          time: "25 mins"
        },
        {
          title:"Lash Tinting",
          cost:30,
          time: "15 mins"
        }
      ]
    }
  ]
  
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