import { Button } from '@mui/material';
import '../../css/services/BackCard.css';

const BackCard = ({param, props}:any) => {
    return(
        <div className="back">
             <div className='back-card'>
                <div className='back-img'>
                    <img src={props.content.main_img} />
                </div>
                <div className='back-details'>
                    <div className='back-title'>
                        <h1>{props.content.title} Prices</h1>
                    </div>
                    <div className='back-mini'>
                        {
                                (props.content.mini_content.map((mini:any) => (
                                    <div className='mini-content'>
                                        <div className='mini-title'>
                                            {mini.title}
                                        </div> 
                                        <div className='time-cost'>
                                            <div className='mini-cost'>
                                                ${mini.cost}
                                            </div>
                                            <div className='mini-time'>
                                                {mini.time}
                                            </div>
                                        </div>
                                    </div>
                                    ) )
                                )
                            }
                        </div>
                    
                    <div className='back-btn-wrapper'>
                        <Button size="small" onClick={() => param(false)}>Go Back</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BackCard