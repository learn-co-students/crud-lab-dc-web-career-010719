import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const { reviews, deleteReview } = this.props
    return (
      <React.Fragment>
        <ul>
          <h4>Reviews:</h4>
          {reviews.map((review) => {
            return (
              <Review
                key={review.id}
                review={review}
                deleteReview={deleteReview}
              />
            )})}
        </ul>
        <br/>
      </React.Fragment>
    );
  }
};

export default Reviews;
