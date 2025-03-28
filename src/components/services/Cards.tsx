import { useEffect, useState } from "react";
import "../../css/services/Cards.css";
import BackCard from "./BackCard";
import FrontCard from "./FrontCard";

type ContentList = {
    content:{
        main_img: string,
        title: string,
        back_essay: string,
        mini_content: 
            {
                title: string,
                cost: number,
                time: number
            }[]
        
    }
}


const Cards:React.FC<ContentList> = (props: ContentList) => {
    const [flip, setflip] = useState(false)
    
    return(
        <div className="card" id="card">
            <FrontCard param = {setflip} props={props} key={props}></FrontCard>
            {
                flip? <div className="card-flip" style={{height:"100%"}}>
                    <BackCard param = {setflip} props={props} key={props}></BackCard>
                </div> 
                :
                 <div className="card-flip"></div>
            }
        </div>
    )

}

export default Cards