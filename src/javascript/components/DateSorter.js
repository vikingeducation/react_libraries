import React, { Component } from "react";
import Button from 'react-md/lib/Buttons/Button';

class DateSorter extends Component {
  render() {
    return (
      <Button 
        raised
        primary 
        onClick={this.props.onDateClick} 
        label={`Sort By Date ${this.props.dateSortDirection}`} 
      />
    );
  }
}

export default DateSorter;
