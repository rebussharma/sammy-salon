import { Button, CardActionArea, CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const FrontCard = ({param, props}:any) => {
    return(
        <div className="front">
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={props.content.main_img}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.content.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {props.content.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" onClick={() => param(true)}>More Info</Button>
                </CardActions>
            </Card>
        </div>
    );
}

export default FrontCard