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
            <div className='bg-card' style={{backgroundColor:props.testimonails.bgc}}></div>
            <div className="image-wrapper">
                    <img src={props.testimonails.img}/>
            </div>
            <div className="container">
                <div className='review-details'>
                    <div className="reviewer-name">
                        <h3>{props.testimonails.reviewer}</h3>
                    </div>
                    <div className="review">
                        {props.testimonails.review}
                    </div>
                </div>

            </div>
        </div>

    </div>
  )
}

export default MainCard