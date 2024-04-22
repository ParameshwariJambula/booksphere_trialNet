import React, { Component } from "react";
import Slider from "react-slick";
import Rating from "./Rating";
import '../style/slick.css';
import '../style/slick-theme.css';
import '../style/Review.css';

export default class ReviewsSlider extends Component {
  render() {
    const { data } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    const renderSlider = (
      <div>
        <Slider {...settings}>
          {data.map((review) => (
            <div key={review.id} className="review-card swiper-slide text-center">
              <div className="profile">
                <img className="user" src={review.user_name} alt={review.user_image} />
                <blockquote>{review.comment}</blockquote>
                <div className="rating-footer">
                  <div className='customer-info'>
                    <p className="name">{review.user_image}</p>
                    <p>{review.user_status}</p>
                  </div>
                  <Rating rating={review.rating} divClass='rating' starClass='star' />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );

    return renderSlider;
  }
}
