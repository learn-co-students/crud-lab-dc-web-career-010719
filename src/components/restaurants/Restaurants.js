import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    const { restaurants, deleteRestaurant } = this.props
    return(
      <ul>
        <h4>Restaurants:</h4>
        {restaurants.map((restaurant) => {
          return (
            <Restaurant 
              key={restaurant.id}
              restaurant={restaurant}
              deleteRestaurant={deleteRestaurant}
            />
          )})}
      </ul>
    );
  }
};

export default Restaurants;
