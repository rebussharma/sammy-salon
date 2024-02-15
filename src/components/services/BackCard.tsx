import { Button, CardActionArea, CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const BackCard = ({param, props}:any) => {
    return(
        <div className="back">
            <Card sx={{ maxWidth: 345 }} className='back-card'>
                <CardActionArea className="CardActionArea">
                    <CardMedia className="CardMedia"
                        component="img"
                        height="140"
                        image={props.content.back_img}
                        alt="green iguana"
                    />
                    <CardContent className="CardContent">
                        <Typography className="Typography" gutterBottom variant="h5" component="div">
                            {props.content.title}
                        </Typography>
                        <Typography className="Typography" variant="body2" color="text.secondary">
                            {props.content.back_essay}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className="CardActions">
                    <Button size="small" onClick={() => param(false)}>Go Back</Button>
                </CardActions>
            </Card>
        </div>
    );
}

export default BackCard