import React, { Component } from "react";

class DateSorter extends Component {
  render() {
    return (
      <button className="btn btn-success" onClick={this.props.onDateClick}>
        Sort By Date {this.props.dateSortDirection}
      </button>
    );
  }
}

export default DateSorter;
