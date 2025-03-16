import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import '../../css/testimonials/Testimonials.css';
import MainCard from './MainCard';

const tina = process.env.PUBLIC_URL +  '/images/testimonials/tina.png';
const angie = process.env.PUBLIC_URL +  '/images/testimonials/angie.png';
const cheryl = process.env.PUBLIC_URL +  '/images/testimonials/cheryl.png';
const jassie = process.env.PUBLIC_URL +  '/images/testimonials/jassie.png';
const jewell = process.env.PUBLIC_URL +  '/images/testimonials/jewell.png';
const jolette = process.env.PUBLIC_URL +  '/images/testimonials/jolette.png';

const responsive = {
  // superLargeDesktop: {
  //   // the naming can be any, depends on you.
  //   breakpoint: { max: 4000, min: 2000 },
  //   items: 4,
  //   slidesToSlide: 3 // optional, default to 1
  // },
  desktop: {
    breakpoint: { max: 4500, min: 800 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1
  },
  mobile: {
    breakpoint: { max: 799, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1
  }
};

const Testimonials: React.FC = () => {
  var testimonials = [
    {
      review: "I’ve been using this place for a couple years now. I’m pretty picky about who does my eyebrows😅 But since I found this place I always come and wait on Sammy to do my brows. I told her what I needed and what I was expecting and she did just that AND some! She does absolutely wonderful EVERY TIME💓! And to top it off I don’t ever feel like she’s threading my brows!😃👌🏼 Like it never hurts with her, I swear if she leaves to another business or anything she definitely has a continuing customer!👍🏼",
      reviewer: "Jewell Medina",
      img: jewell,
      date: "8 months Ago",
      bgc: "#5885c3"
    }, {
      review:"Good service, ask for Sammy, haven't been in a year, eyebrows threaded and tinted, omg, my eyebrows are beautiful",
      reviewer:"Cheryl Sandidge",
      img: cheryl,
      date: "4 year ago",
      bgc:"#4fbdc0"
    },
    {
      review:"This place is a great find! I came in for an eyebrow wax and Sammy recommended a threading. It was my first time and it was so fast! Pricing is fantastic on all services, and my eyebrows look fantastic! Definitely recommend!",
      reviewer:"Jassie Zaidi ",
      img:jassie,
      date:"1 year ago",
      bgc:"#e73d71"
    },
    {
      review:"Sammy was awesome she did my threading and tinting and did amazing !",
      reviewer:"Angie c ",
      img:angie,
      date:" 2 years ago",
      bgc:"#5885c3"
    },
    {
      review:"Sammy did excellent job on threading my face! Least painful experience in the last 15 years! Sweet girl and thanks Sammy",
      reviewer:"Tina Herr",
      img:tina,
      date:" 3 years ago",
      bgc:"#4fbdc0"
    }, {
      review: "I get my eyebrows done by Sammy and she’s very good with her job! :)",
      reviewer: "Jolette",
      img:jolette,
      date: "5 years ago",
      bgc:"#e73d71"
    }
  ]
  return (
    <div className='testimonials' id='testimonials'>
      <div className='testimonial-wrapper'>
          <div className='testimonial-title'>
            <div className='main-title'>
              Our Clients Love Us
            </div>
            <div className='sub-title'>
            Read what they say about us
            </div>
          </div>
          <Carousel
              responsive={responsive}
              autoPlay={true}
              swipeable={true}
              draggable={true}
              showDots={true}
              infinite={true}
              partialVisible={false}
              dotListClass="custom-dot-list-style"
          >
              {testimonials.map((testimonial) => (<MainCard testimonails={testimonial} key={testimonial.reviewer}></MainCard>))}
            </Carousel>
        </div> 
        </div>
  )
}

export default Testimonials