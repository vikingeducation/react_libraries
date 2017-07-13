import React, { Component } from "react";
import Filterables from "./Filterables";
import Gallery from "./Gallery";
import Pagination from "./Pagination";
import DATA from "../photos";

class FilterableGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      igFilter: "Normal",
      dateSortDirection: "Descending",
      searchTerm: "",
      page: 1,
      category: ""
    };
  }

  onChangeInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onDateClick = e => {
    e.preventDefault();
    if (this.state.dateSortDirection === "Descending") {
      this.setState({
        dateSortDirection: "Ascending"
      });
    } else {
      this.setState({
        dateSortDirection: "Descending"
      });
    }
  };

  onSortableClick = e => {
    e.preventDefault();
    let text = e.target.innerText;
    let category = text.substring(0, text.indexOf(":"));
    this.setState({
      category
    });
  };

  onIncrement = e => {
    this.setState({
      page: this.state.page + 1
    });
  };

  onDecrement = e => {
    if (this.state.page >= 2) {
      this.setState({
        page: this.state.page - 1
      });
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <h1>React Photo Gallery</h1>
        </div>
        <Filterables
          onChangeInput={this.onChangeInput}
          onDateClick={this.onDateClick}
          dateSortDirection={this.state.dateSortDirection}
          searchTerm={this.state.searchTerm}
        />
        <Gallery
          photos={DATA}
          igFilter={this.state.igFilter}
          onSortableClick={this.onSortableClick}
          dateSortDirection={this.state.dateSortDirection}
          searchTerm={this.state.searchTerm}
          page={this.state.page}
          category={this.state.category}
        />
        <Pagination
          onIncrement={this.onIncrement}
          onDecrement={this.onDecrement}
          page={this.state.page}
        />
      </div>
    );
  }
}
export default FilterableGallery;
