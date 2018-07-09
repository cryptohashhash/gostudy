import React, { Component } from "react";
import LeadsTable from "./components/LeadsTable";
import LeadsTable2 from "./components/LeadsTable2";
import { RawData } from "./components/RawData";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leads: null
    };
  }

  componentDidMount() {
    console.log("here");
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
        {/* <RawData leads={this.state.leads} /> */}
        {/* {!!this.state.leads && <LeadsTable2 leads={this.state.leads} />} */}
        <LeadsTable leads={this.state.leads} />
      </main>
    );
  }
}

export default App;
