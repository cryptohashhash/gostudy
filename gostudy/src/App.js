import React, { Component } from "react";
import LeadsTable from "./components/LeadsTable";
// import SearchForm from "./components/SearchForm";
import LeadsTable2 from "./components/LeadsTable2";
import LeadsTable3 from "./components/LeadsTable3";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leads: null,
      startDate: null,
      endDate: null,
      leadType: "leadDate"
    };
  }

  handleSearch = event => {
    event.preventDefault();
    const form = event.target;
    this.setState({
      startDate: null || new Date(form.startDate.value),
      endDate: null || new Date(form.endDate.value),
      leadType: form.leadType.value
    });
    console.log(this.state.startDate);
  };

  componentDidMount() {
    fetch("/leads")
      .then(resp => {
        if (!resp.ok) {
          throw new Error("error!");
        } else {
          return resp;
        }
      })
      .then(resp => resp.json())
      .then(json => this.setState({ leads: json }))
      .catch(resp => {
        this.setState({ leads: [] });
      });
  }
  render() {
    return (
      <main>
        <form onSubmit={this.handleSearch}>
          <select name="leadType">
            <option value="leadDate">Date Became a Lead</option>
            <option value="saleDate">Date Became a Sale</option>
          </select>
          <input type="text" name="startDate" placeholder="Start Date" />
          <input type="text" name="endDate" placeholder="End Date" />
          <button type="submit">Search</button>
        </form>
        {/* <SearchForm onSearch={this.handleSearch} /> */}
        {!!this.state.leads && (
          <LeadsTable3
            leads={this.state.leads}
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            leadType={this.state.leadType}
          />
        )}
      </main>
    );
  }
}

export default App;
