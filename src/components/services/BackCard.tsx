import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faSackDollar, faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@mui/material';
import '../../css/services/BackCard.css';

const BackCard = ({param, props}:any) => {
    return(
        <div className="back">
             <div className='back-card'>
                <div className='back-img'>
                    <img src={props.content.main_img} alt='back-img'/>
                </div>
                <div className='back-details'>
                    <div className='back-title'>
                        <h1>{props.content.title} Prices</h1>
                    </div>
                    <div className='back-mini'>
                        <div className='time-cost-icon'>
                            <div className='back-services'>
                                Services
                            </div>
                            <div className='cost-time-wrapper'>
                                <FontAwesomeIcon className="icon-cost" icon={faSackDollar as IconProp} />
                                <FontAwesomeIcon className="icon-time" icon={faStopwatch as IconProp} />
                            </div>
                        </div>
                        {
                                (props.content.mini_content.map((mini:any) => (
                                    <div className='mini-content'  key={mini.title}>
                                        <div className='mini-title'>
                                            {mini.title}
                                        </div> 
                                        <div className='time-cost'>
                                            <div className='mini-cost'>
                                                ${mini.cost}
                                            </div>
                                            <div className='mini-time'>
                                                {mini.time} mins
                                            </div>
                                        </div>
                                    </div>
                                    ) ) 
                                )
                                
                            }
                    </div>
                </div>
                                    
                <div className='back-btn-wrapper'>
                    <Button   sx={{
                                    ':hover': {
                                        bgcolor: 'white',
                                        color: 'black',
                                        },
                                     }} 
                                     variant="outlined" 
                                     size="small" 
                                     onClick={() => param(false)}>
                            Go Back
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default BackCard