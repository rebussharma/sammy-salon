import appos from '../../assets/testimonials/appos.png'
import rating from '../../assets/testimonials/five-star.png'
import '../../css/testimonials/MainCard.css'
type Testimonial_List = {
    testimonails: {
        review:string,
        reviewer:string,
        img:string,
        date:string,
        bgc:string
    }
}

const MainCard:React.FC <Testimonial_List>= (props: Testimonial_List) => {
  return (
    <div className="main-card">
        <div className="body-card">
            <div className='appos-img'>
                <img src= {appos}/>
            </div>
            <div className="testimonial-container">
                <div className="review">
                    {props.testimonails.review}
                </div>

            </div>
            <div className='reviewer-rating'>
                <div className='rating'>
                    <img src={rating} />
                </div>
                <div className='reviewer'>
                <div className="image-wrapper">
                        <img src={props.testimonails.img}/>
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