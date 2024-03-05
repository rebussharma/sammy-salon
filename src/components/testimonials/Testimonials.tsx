import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import angie from '../../assets/testimonials/angie.png';
import cheryl from '../../assets/testimonials/cheryl.png';
import jassie from '../../assets/testimonials/jassie.png';
import jewell from '../../assets/testimonials/jewell.png';
import jolette from '../../assets/testimonials/jolette.png';
import tina from '../../assets/testimonials/tina.png';
import '../../css/testimonials/Testimonials.css';
import MainCard from './MainCard';

const Testimonials: React.FC = () => {
  var testimonials = [
    {
      review: "I’ve been using this place for a couple years now. I’m pretty picky about who does my eyebrows😅 But since I found this place I always come and wait on Sammy to do my brows. I told her what I needed and what I was expecting and she did just that AND some! She does absolutely wonderful EVERY TIME💓! And to top it off I don’t ever feel like she’s threading my brows!😃👌🏼 Like it never hurts with her, I swear if she leaves to another business or anything she definitely has a continuing customer!👍🏼",
      reviewer: "Jewell Medina",
      img: jewell,
      date: "8 months Ago",
      bgc: "rgb(9 149 206)"
    }, {
      review:"Good service, ask for Sammy, haven't been in a year, eyebrows threaded and tinted, omg, my eyebrows are beautiful",
      reviewer:"Cheryl Sandidge",
      img: cheryl,
      date: "4 year ago",
      bgc:"black"
    },
    {
      review:"This place is a great find! I came in for an eyebrow wax and Sammy recommended a threading. It was my first time and it was so fast! Pricing is fantastic on all services, and my eyebrows look fantastic! Definitely recommend!",
      reviewer:"Jassie Zaidi ",
      img:jassie,
      date:"1 year ago",
      bgc:"red"
    },
    {
      review:"Sammy was awesome she did my threading and tinting and did amazing !",
      reviewer:"Angie c ",
      img:angie,
      date:" 2 years ago",
      bgc:"yellow"
    },
    {
      review:"Sammy did excellent job on threading my face! Least painful experience in the last 15 years! Sweet girl and thanks Sammy",
      reviewer:"Tina Herr",
      img:tina,
      date:" 3 years ago",
      bgc:"blue"
    }, {
      review: "I get my eyebrows done by Sammy and she’s very good with her job! :)",
      reviewer: "Jolette",
      img:jolette,
      date: "5 years ago",
      bgc:"green"
    }
  ]
  return (
    <div className='testimonials' id='testimonials'>
      <div className='testimonial-wrapper'>
        {testimonials.map((testimonial) => (<MainCard testimonails={testimonial} key={testimonial.reviewer}></MainCard>))}

        {/* <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={6100}
        >
        <div>
          <img src="/images/shirley.png" />
          <div className="myCarousel">
            <h3>Shirley Fultz</h3>
            <h4>Designer</h4>
            <p>
              It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site
            </p>
          </div>
        </div>

        <div>
          <img src="/images/daniel.png" />
          <div className="myCarousel">
            <h3>Daniel Keystone</h3>
            <h4>Designer</h4>
            <p>
              The simple and intuitive design makes it easy for me use. I highly
              recommend Fetch to my peers.
            </p>
          </div>
        </div>

        <div>
          <img src="/images/theo.png" />
          <div className="myCarousel">
            <h3>Theo Sorel</h3>
            <h4>Designer</h4>
            <p>
              I enjoy catching up with Fetch on my laptop, or on my phone when
              I'm on the go!
            </p>
          </div>
        </div>
      </Carousel> */}
      </div>
    </div>
  )
}

export default Testimonials