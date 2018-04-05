import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import Header from './Header/Header';
import CommentsList from './Comments/CommentsList';

class Details extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          restaurantId : this.props.restaurantId,
            restaurantName : "",
            restaurantAddress : "",
            restaurantPhone: "",
            restaurantRating: "",
            restaurantImage: "",
            restaurantReviews: [],
            requestHeader: {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer 0DBI9WJvAoIoX0VgLQqvkfm_k1AWXBh9xB2BbpWs_N2dNhocRn12OPiaz5PrpC7t4N1MhgbbixFZX2YZQmZagtXgcKZs1TN5lvGMNFuW3oYmuC-kpyGOn-Wo5xyKWnYx'
                }
            }
        }

        fetch('https://api.yelp.com/v3/businesses/'+this.state.restaurantId, this.state.requestHeader)
            .then((restaurantData) => restaurantData.json())
            .then((restaurantData) => {
                this.setState({
                    restaurantName : restaurantData.name,
                    restaurantAddress : restaurantData.location.display_address[0],
                    restaurantPhone : restaurantData.display_phone,
                    restaurantRating: restaurantData.rating,
                    restaurantImage: restaurantData.image_url
                    });
            }).catch(function (error) {
            console.log("Error in Getting single restaurant data ", error);
        });

        fetch('https://api.yelp.com/v3/businesses/'+this.state.restaurantId+'/reviews', this.state.requestHeader)
            .then((restaurantReviewsData) => restaurantReviewsData.json())
            .then((restaurantReviewsData) => {
                this.setState({
                    restaurantReviews: restaurantReviewsData.reviews
                })
            })
    }


  render() {
    return(
      <ScrollView>
          <Header
              restaurantName={this.state.restaurantName}
              restaurantAddress={this.state.restaurantAddress}
              restaurantPhone={this.state.restaurantPhone}
              restaurantRating={this.state.restaurantRating}
              restaurantImage={this.state.restaurantImage}
          />
              <CommentsList restaurantReviews={this.state.restaurantReviews}></CommentsList>

      </ScrollView>
    )
  }
}

export default Details;
