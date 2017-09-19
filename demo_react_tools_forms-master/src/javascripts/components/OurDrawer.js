import React from "react";
import Drawer from "material-ui/Drawer";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import ActionCreditCard from "material-ui/svg-icons/action/credit-card";

export default class OurDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.icons = Array(100)
      .fill(true)
      .map((ele, idx) => <ActionCreditCard key={idx} />);
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  render() {
    return (
      <div>
        <RaisedButton label="Toggle Drawer" onClick={this.handleToggle} />
        <Drawer width={200} openSecondary={true} open={this.state.open}>
          <AppBar title="AppBar" />
          {/* {}<ActionCreditCard /> */}
          {this.icons}
        </Drawer>
      </div>
    );
  }
}
