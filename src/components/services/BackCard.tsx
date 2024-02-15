import { Button } from '@mui/material';


const BackCard = ({param, props}:any) => {
    return(
        <div className="back">
             <div className='back-card'>
                <div className='title'>
                    Before vs After
                </div>
                <div className='image-wrapper'>
                    <img src={props.content.main_img} />
                </div>
                <div className='text-wrapper'>
                    {
                        props.content.back_essay
                    }
                </div>
                <div className='btn-wrapper'>
                    <Button size="small" onClick={() => param(false)}>Go Back</Button>
                </div>
            </div>
        </div>
    );
}

export default BackCard