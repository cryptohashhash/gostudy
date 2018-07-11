import React from "react";
import "./leadsTable.css";
import ReactTable from "react-table";
// import Axios from "axios";
import _ from "lodash";
import "react-table/react-table.css";

const dateformat = require("dateformat");

// import Lead from "./Lead";

function LeadsTable({ leads }) {
  return (
    <table>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Nationality</th>
        <th>IP Country</th>
        <th>Date Became Lead</th>
        <th>Date Converted to Sale</th>
      </tr>
      {!!leads ? (
        leads.map(lead => (
          <tr key={lead._id}>
            <td>{lead.firstName}</td>
            <td>{lead.lastName}</td>
            <td>{lead.nationality}</td>
            <td>{lead.ipCountry}</td>
            <td>{dateformat(lead.leadDate, "dd mmm yyyy")}</td>
            <td>{dateformat(lead.saleDate, "dd mmm yyyy")}</td>
          </tr>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </table>
  );
}

export default LeadsTable;
