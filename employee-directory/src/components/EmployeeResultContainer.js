import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import API from "../utils/API";

class EmployeeResultContainer extends Component {
  state = {
    search: "",
    results: []
  };

  // When this component mounts, search the Random Person API Employee Info
  componentDidMount() {
    this.searchEmployee();
  }

  //Do API call 

  searchEmployee = () => {
    API.search()
      .then(res => this.setState({ results: res.data.results }))
      .catch(err => console.log(err));
  };

  //

  handleInputChange = event => {
    const value = event.target.value;
    this.setState({
      search: value
    });
    const newArr = this.state.results.filter((employee) => employee.name.last.includes(value))
    this.setState({
      results: newArr
    });
  };

  handleFilterAge = () => {
    const ageFilter = this.state.results.sort((a, b) => {
      if (a.dob.age > b.dob.age) {
        return 1;
      } else if (a.dob.age < b.dob.age) {
        return -1;
      } else { return 0 }
    })
    this.setState({
      results: ageFilter
    })
  }

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchEmployee(this.state.search);
  };

  render() {
    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <ResultList results={this.state.results} handleFilterAge={this.handleFilterAge} />
      </div>
    );
  }
}

export default EmployeeResultContainer;
