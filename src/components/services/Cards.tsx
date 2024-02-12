import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useState } from "react";
import "../../css/services/Cards.css";

type ContentList = {
    content:{
        main_img: string,
        title: string,
        description: string,
        cost: number,
        time: number,
        flip_img: string
    }
}
const Cards:React.FC<ContentList> = (props: ContentList) => {
    const [flip, setflip] = useState(false)

    return (
    <div className={`card ${flip ? "flip":""}`} id="cards">
        <div className="front" onClick={() => setflip(!flip)}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                sx={{ height: 140 }}
                image={props.content.main_img}
                title={props.content.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.content.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.content.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={() => alert("Hello")}>Share</Button>
                </CardActions>
            </Card>
        </div>

        <div className="back" onClick={() => setflip(!flip)}>
            <Card sx={{ maxWidth: 345 }}>
                
                <CardActions>
                    <Button size="small" onClick={() => alert("hi")}>Share</Button>
                </CardActions>
            </Card>
        </div>
    </div>
    )
}

export default Cards