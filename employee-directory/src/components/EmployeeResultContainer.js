import React, { Component } from "react";
// import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import API from "../utils/API";

class EmployeeResultContainer extends Component {
  state = {
    search: "",
    results: []
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    this.searchEmployee();
  }

  //removed "query" parameter

  // searchEmployee = () => {
  //   API.search()
  //     .then(res => this.setState({ results: res.data.data }))
  //     .catch(err => console.log(err));
  // };

  searchEmployee = () => {
    API.search()
      .then(res => console.log("res", res))
      .catch(err => console.log(err));
  };

  // handleInputChange = event => {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // When the form is submitted, search the Giphy API for `this.state.search`
  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   this.searchEmployee(this.state.search);
  // };

  render() {
    return (
      <div>
        {/* <SearchForm
        // search={this.state.search}
        // handleFormSubmit={this.handleFormSubmit}
        // handleInputChange={this.handleInputChange}
        /> */}
        <ResultList results={this.state.results} />
      </div>
    );
  }
}

export default EmployeeResultContainer;