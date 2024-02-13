// import Button from "@mui/material/Button";
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
import { useState } from "react";
import "../../css/services/Cards.css";
import BackCard from "./BackCard";
import FrontCard from "./FrontCard";

type ContentList = {
    content:{
        main_img: string,
        title: string,
        description: string,
        cost: number,
        time: string,
        back_img: string,
        back_essay: string,
    }
}


const Cards:React.FC<ContentList> = (props: ContentList) => {
    const [flip, setflip] = useState(false)

    if (!flip){
        return(
            <div>

            <div className={`card ${flip ? "flip":""}`} id="cards">
                <FrontCard param = {setflip} props={props}></FrontCard>
            </div>
        </div>
        )
    }
    else
    return ( 
        <div>
            <div className={`card ${flip ? "flip":""}`} id="cards">
                <BackCard param = {setflip} props={props}></BackCard>
            </div>
        </div>
    )
}

export default Cards