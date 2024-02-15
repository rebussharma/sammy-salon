import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faSackDollar, faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@mui/material';
import '../../css/services/FrontCard.css';


const FrontCard = ({param, props}:any) => {
    return(
        <div className="front">
            <div className='front-card'>
                <div className='title'>
                    {props.content.title}
                </div>
                <div className='image-wrapper'>
                    <img src={props.content.main_img} />
                </div>
                <div className='time-cost-icon'>

                    <FontAwesomeIcon className="icon-cost" icon={faSackDollar as IconProp} />
                    <FontAwesomeIcon className="icon-time" icon={faStopwatch as IconProp} />

                </div>
                <div className='text-wrapper'>
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
                <div className='btn-wrapper'>
                    <Button size="small" onClick={() => param(true)}>More Info</Button>
                </div>
            </div>
        </div>
    );
}

export default FrontCard