import { useState } from "react";
import "../../css/services/Cards.css";
import BackCard from "./BackCard";
import FrontCard from "./FrontCard";

type ContentList = {
    content:{
        main_img: string,
        title: string,
        back_img: string,
        back_essay: string,
        mini_content: 
            {
                title: string,
                cost: number,
                time: string
            }[]
        
    }
}


const Cards:React.FC<ContentList> = (props: ContentList) => {
    const [flip, setflip] = useState(false)

    if (!flip){
        return(
            <div className={`card ${flip ? "flip":""}`} id="card">
                <FrontCard param = {setflip} props={props}></FrontCard>
            </div>
        )
    }
    else {
        return ( 
            <div className={`card ${flip ? "flip":""}`} id="card">
                <BackCard param = {setflip} props={props}></BackCard>
            </div>
        )
    }
}

export default Cards