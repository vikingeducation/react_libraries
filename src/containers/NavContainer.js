import React, { Component } from "react";
import { connect } from "react-redux";
// import { NavLink } from "react-router-dom";
import { getApiData } from "../actions";
import Sidebar from "../components/elements/Sidebar";

class NavLinks extends Component {
  render() {
    const { getSearchData, location } = this.props;
    return (
      <Sidebar
        header={
          <span>
            <label>Search:</label>
            <input
              type="text"
              onChange={e => getSearchData(location.pathname, e.target.value)}
              placeholder="Search"
            />
          </span>
        }
        links={[
          { href: "/", title: "Home" },
          { href: "/films", title: "Films" },
          { href: "/people", title: "People" },
          { href: "/planets", title: "Planets" },
          { href: "/species", title: "Species" },
          { href: "/starships", title: "Starships" },
          { href: "/vehicles", title: "Vehicles" }
        ]}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    infoData: state.infoData,
    search: state.search
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSearchData: (location, value) => {
      dispatch(getApiData(location.substring(1), `?search=${value}`));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavLinks);
