import React, { Component } from "react";
import { connect } from "react-redux";
import { getApiData } from "../actions";
import Vehicles from "../components/Vehicles/Vehicles";
import Tiles from "../components/elements/Tiles";

class VehiclesContainer extends Component {
  componentDidMount() {
    this.props.getVehiclesData(this.props.location.search);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.search !== nextProps.location.search) {
      this.props.getVehiclesData(nextProps.location.search);
    }
  }

  render() {
    const { infoData, isFetching } = this.props;

    return (
      <Tiles>
        <Vehicles vehiclesData={infoData} isFetching={isFetching} />
      </Tiles>
    );
  }
}

const mapStateToProps = state => {
  return {
    infoData: state.infoData,
    isFetching: state.isFetching
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getVehiclesData: params => {
      dispatch(getApiData("vehicles", params));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VehiclesContainer);
