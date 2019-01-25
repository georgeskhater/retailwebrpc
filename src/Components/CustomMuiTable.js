import React, { Component } from "react";
import MUIDataTable from "mui-datatables";

export default class CustomMuiTable extends Component {
  render() {
    const columns = ["First Name", "Last Name", "Country", "Email"];

    const data = [
      ["Gabby", "George", "France", "georgesgabby@gmail.com"],
      ["Aiden", "Lloyd", "USA", "aidenlloyd@loreal.com"],
      ["Jaden", "Collins", "France", "collins.jaden@loreal.com"]
    ];

    const options = {
      filterType: "dropdown",
      responsive: "scroll",
      rowsPerPage: 5,
      rowsPerPageOptions: [5, 10, 20],
      selectableRows: false,
      print: false,
      download: false
    };

    return (
      <MUIDataTable
        title={""}
        data={data}
        columns={columns}
        options={options}
      />
    );
  }
}
