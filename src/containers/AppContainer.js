import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import App from "../components/App";

class AppContainer extends React.Component {
	render() {
		return (
			<MuiThemeProvider>
				<App />
			</MuiThemeProvider>
		);
	}
}

export default AppContainer;
