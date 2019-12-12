import React, { Component } from 'react';
import { connect } from 'react-redux'

class RestaurantInput extends Component {
  state = {
    text: ''
  }
  
  handleOnSubmit
  render() {
    return (
      <div>
         <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            value={this.state.text}
            onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" />
      </form>
      </div>
    );
  }
};

export default RestaurantInput;
