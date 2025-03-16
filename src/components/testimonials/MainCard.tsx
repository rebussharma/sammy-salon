import '../../css/testimonials/MainCard.css';
type Testimonial_List = {
    testimonails: {
        review:string,
        reviewer:string,
        img:string,
        date:string,
        bgc:string
    }
}

const five_star = "★★★★★"
const MainCard:React.FC <Testimonial_List>= (props: Testimonial_List) => {
  return (
    <div className="main-card">
        <div className="body-card">
            <div className='appos'>
            ❝
            </div>
            <div className="testimonial-container">
                <div className="review">
                    {props.testimonails.review}
                </div>

            </div>
            <div className='reviewer-rating'>
                <div className='rating'>
                {five_star}
                </div>
                <div className='reviewer'>
                <div className="image-wrapper">
                        <img src={props.testimonails.img} alt='reviewer-pic'/>
                </div>
                <div className="name">
                            <h3>{props.testimonails.reviewer}</h3>
                </div>
            </div>
            </div>


        </div>

    </div>
  )
}

export default MainCard