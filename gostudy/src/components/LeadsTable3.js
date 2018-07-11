import React from "react";
import "./leadsTable.css";
import ReactTable from "react-table";
import _ from "lodash";
import "react-table/react-table.css";
import { CSVLink, CSVDownload } from "react-csv";
const dateformat = require("dateformat");

export default class LeadsTable2 extends React.Component {
  render() {
    const data = this.props.leads;

    const columns = [
      {
        Header: "First Name",
        accessor: "firstName" // String-based value accessors!
      },
      {
        Header: "Last Name",
        accessor: "lastName" // String-based value accessors!
      },
      {
        Header: "Nationality",
        accessor: "nationality" // String-based value accessors!
      },
      {
        Header: "IP Country",
        accessor: "ipCountry" // String-based value accessors!
      },
      {
        Header: "Date Became a Lead",
        accessor: "leadDate", // String-based value accessors!
        Cell: row => <span>{dateformat(row.value, "dd-mm-yyyy")}</span>,
        defaultSortDesc: true
      },
      {
        Header: "Date Became a Sale",
        accessor: "saleDate", // String-based value accessors!
        Cell: row => <span>{dateformat(row.value, "dd-mm-yyyy")}</span>
      },
      {
        Header: "Affiliate Username",
        accessor: "affiliateUsername",
        Filter: ({ filter }) => (
          <span value={filter ? filter.value : "all"}>coolblogs123</span>
        ),
        filterMethod: (filter, rows, column) => {
          return true;
        },
        filterAll: true
      }
    ];
    const headers = [
      { label: "First Name", key: "firstName" },
      { label: "Last Name", key: "lastName" },
      { label: "Nationaily", key: "nationality" },
      { label: "IP Country", key: "ipCountry" },
      { label: "Date Became a Lead", key: "leadDate" },
      { label: "Date Became a Sale", key: "saleDate" },
      { label: "Affiilate", key: "affiliateUsername" }
    ];

    let startDate = this.props.startDate;
    let endDate = this.props.endDate;
    let leadType = this.props.leadType;

    const filteredArray = [];

    const dateFilter = data => {
      if (startDate && endDate) {
        data.map(lead => {
          let date = new Date(lead[leadType]);
          if (date >= startDate && date <= endDate) filteredArray.push(lead);
        });
        console.dir(data);
        console.dir(filteredArray);
        return filteredArray;
      } else if (startDate && !endDate) {
        data.map(lead => {
          let date = new Date(lead[leadType]);
          if (date > startDate) filteredArray.push(lead);
        });
        return filteredArray;
      } else if (!startDate && endDate) {
        data.map(lead => {
          let date = new Date(lead[leadType]);
          if (date < endDate) filteredArray.push(lead);
        });
        return filteredArray;
      } else {
        return data;
      }
    };

    const filteredData = dateFilter(data);

    return (
      <div>
        <CSVLink
          data={filteredData}
          headers={headers}
          filename={"affiliate-lead-data.csv"}
          target="_blank"
        >
          Download CSV
        </CSVLink>
        <ReactTable
          data={filteredData}
          noDataText="No Data Available"
          columns={columns}
          filterable
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </div>
    );
  }
}
