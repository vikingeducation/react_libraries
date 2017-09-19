import React from "react";
import Paper from "material-ui/Paper";
import ListResource from "../components/ListResource";
import Search from "../components/Search";

class ListResourceContainer extends React.Component {
  constructor({ location }) {
    super();
    this.resource = location.pathname[1]
      .toUpperCase()
      .concat(location.pathname.slice(2));

    this.state = {
      resource: [],
      page: 1,
      numPages: 0,
      searchString: ""
    };
  }

  getResourceList = () => {
    fetch(
      `https://swapi.co/api/${this.resource.toLowerCase()}?page=${this.state
        .page}&search=${this.state.searchString}`
    )
      .then(res => {
        return res.json();
      })
      .then(data => {
        const numPages = Math.ceil(data.count / 10);
        this.setState({ resource: data.results, numPages });
      });
  };

  componentDidMount() {
    this.getResourceList();
  }

  handlePageChange = async page => {
    await Promise.resolve(this.setState({ page: `${page}` }));
    this.getResourceList();
  };

  handleSearch = async e => {
    await Promise.resolve(
      this.setState({ page: "1", searchString: e.target.value, numPages: "0" })
    );
    this.getResourceList();
  };

  render() {
    let resources = ["People", "Planets", "Films", "Vehicles", "Starships"];
    if (!resources.includes(this.resource)) return null;

    return (
      <div className="resource">
        <Paper style={{ padding: "10px" }} zDepth={2}>
          <h1 className="resource-title">{this.resource}</h1>
          <Search onChange={this.handleSearch} />
          <ListResource
            resourceName={this.resource.toLowerCase()}
            resource={this.state.resource}
            {...this.state}
            onPageChange={this.handlePageChange}
          />
        </Paper>
      </div>
    );
  }
}

export default ListResourceContainer;
