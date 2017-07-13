import React, { Component } from "react";
import Header from "./Header";
import FilterableGallery from "./FilterableGallery";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <FilterableGallery />
      </div>
    );
  }
}

export default App;
