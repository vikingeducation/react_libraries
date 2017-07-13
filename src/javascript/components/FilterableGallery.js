import React, { Component } from "react";
import Filterables from "./Filterables";
import Gallery from "./Gallery";
import Pagination from "./Pagination";
import DATA from "../photos";
import Paper from 'react-md/lib/Papers';

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

  onChangeFilter = filter => {
    this.setState({
      igFilter: filter
    });
  };

  onChangeSearch = value => {
    this.setState({
      searchTerm: value
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
      <div>

        <div className="md-grid">
          <Paper>
            <h1>React Photo Gallery</h1>
            <Filterables
              onChangeFilter={this.onChangeFilter}
              onChangeSearch={this.onChangeSearch}
              onDateClick={this.onDateClick}
              dateSortDirection={this.state.dateSortDirection}
              searchTerm={this.state.searchTerm}
              className="md-cell--12"
            />
          </Paper>
        </div>
        <div>
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
      </div>
    );
  }
}
export default FilterableGallery;
