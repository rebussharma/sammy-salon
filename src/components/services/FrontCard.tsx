import { Button } from '@mui/material';
import '../../css/services/FrontCard.css';


const FrontCard = ({param, props}:any) => {
    return(
        <div className="front">
            <div className='front-card'>
                <div className='card-media'>
                    <div className='image-wrapper'>
                        <img src={props.content.main_img} alt='main-img'/>
                    </div>
                </div>
                <div className='details-wrapper'>
                    <div className='service cost title'>
                        <div className='title'>
                            <h1>{props.content.title}</h1>
                        </div>
                        <h3 className='cost'> ${props.content.cost} & Up</h3>
                        </div>
                    <div className='btn-wrapper'>
                        <Button   sx={{
                                        ':hover': {
                                        bgcolor: 'white',
                                        color: 'black',
                                        },
                                     }} 
                                     variant="outlined" 
                                     size="small" 
                                     onClick={() => param(true)}>More Info</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FrontCard