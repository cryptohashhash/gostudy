import React from "react";
import "./leadsTable.css";
import ReactTable from "react-table";
// import { RawData } from "./RawData";
// import Axios from "axios";
import _ from "lodash";
import "react-table/react-table.css";

// const requestData = (pageSize, page, sorted, filtered, leads) => {
//   return new Promise((resolve, reject) => {
//     // You can retrieve your data however you want, in this case, we will just use some local data.
//     let filteredData = leads;

//     // You can use the filters in your request, but you are responsible for applying them.
//     if (filtered.length) {
//       filteredData = filtered.reduce((filteredSoFar, nextFilter) => {
//         return filteredSoFar.filter(row => {
//           return (row[nextFilter.id] + "").includes(nextFilter.value);
//         });
//       }, filteredData);
//     }
//     // You can also use the sorting in your request, but again, you are responsible for applying it.
//     const sortedData = _.orderBy(
//       filteredData,
//       sorted.map(sort => {
//         return row => {
//           if (row[sort.id] === null || row[sort.id] === undefined) {
//             return -Infinity;
//           }
//           return typeof row[sort.id] === "string"
//             ? row[sort.id].toLowerCase()
//             : row[sort.id];
//         };
//       }),
//       sorted.map(d => (d.desc ? "desc" : "asc"))
//     );

//     // You must return an object containing the rows of the current page, and optionally the total pages number.
//     const res = {
//       rows: sortedData.slice(pageSize * page, pageSize * page + pageSize),
//       pages: Math.ceil(filteredData.length / pageSize)
//     };

//     // Here we'll simulate a server response with 500ms of delay.
//     // setTimeout(() => resolve(res), 500);
//   });
// };

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
    accessor: "leadDate" // String-based value accessors!
  },
  {
    Header: "Date Became a Sale",
    accessor: "saleDate" // String-based value accessors!
  }
];

export default class LeadsTable2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      pages: -1,
      loading: true
    };
    this.fetchData = this.fetchData.bind(this);
  }

  fetchData(state, instance) {
    // Whenever the table model changes, or the user sorts or changes pages, this method gets called and passed the current table model.
    // You can set the `loading` prop of the table to true to use the built-in one or show you're own loading bar if you want.
    this.setState({ loading: true });
    // Request the data however you want.  Here, we'll use our mocked service we created earlier
    fetch("/leads", {
      page: state.page,
      pageSize: state.pageSize,
      sorted: state.sorted,
      filtered: state.filtered
    })
      .then(res => res.json())
      .then(res => {
        // Now just get the rows of data to your React Table (and update anything else like total pages or loading)
        this.setState({
          data: res,
          pages: res.pages,
          loading: false
        });
      });
  }

  render() {
    return (
      <div>
        <ReactTable
          columns={columns}
          data={this.state.data}
          pages={this.state.pages}
          loading={this.state.loading}
          manual // informs React Table that you'll be handling sorting and pagination server-side
          onFetchData={this.fetchData}
          //   onFetchData={(state, instance) => {
          //     // show the loading overlay
          //     this.setState({ loading: true });
          //     // fetch your data
          //     fetch("/leads", {
          //       page: state.page,
          //       pageSize: state.pageSize,
          //       sorted: state.sorted,
          //       filtered: state.filtered
          //     })
          //       .then(res => res.json())
          //       .then(res => {
          //         // Update react-table
          //         this.setState({
          //           data: res,
          //           //   pages: res,
          //           loading: false
          //         });
          //       });
          //   }}
          filterable
          defaultPageSize={20}
          className="-striped -highlight"
        />
      </div>
    );
  }
}
