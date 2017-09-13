import React, { Component } from "react";
import ControlledFormContainer from "../containers/ControlledFormContainer";
import { Container } from "reactstrap";
import AppBar from "material-ui/AppBar";
import OurDrawer from "./OurDrawer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar title="MATERIAL-UI 4 LYFE" />
        <OurDrawer />
        <Container>
          <section>
            <h2>Controlled Form With Live Validations</h2>
            <ControlledFormContainer />
          </section>
          <hr />
        </Container>
      </div>
    );
  }
}

export default App;
