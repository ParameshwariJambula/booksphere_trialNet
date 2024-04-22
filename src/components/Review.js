import React, { useState, useEffect } from 'react';
import ReviewsSlider from "./ReviewSlider";
import '../style/Review.css';

function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/BooklandAPI/review');
        if (!response.ok) {
          throw new Error('Failed to fetch reviews');
        }
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  const renderReviews = (
    <section id='review-page'>
      <div className="container">
        <p className="section-title">WHAT OUR CUSTOMERS ARE SAYING</p>
        <ReviewsSlider data={reviews} />
      </div>
    </section>
  );

  return renderReviews;
}

export default Reviews;
