import React, { Component } from 'react';

export default class CatList extends Component { 
  render() {
    return (
      <div>
        {(this.props.catPics || []).map(
          image => <img src={image.url} />
        )}
      </div>
    );
  }
} 
