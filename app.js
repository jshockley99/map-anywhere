const vehicleData = [
  {
    status: "Active",
    rule: "Van Speeding",
    region: "All",
    createdBy: "Michelle Jones",
    createdDate: "6/12/16"
  },
  {
    status: "Active",
    rule: "Van Excessive Idle",
    region: "All",
    createdBy: "Michelle Jones",
    createdDate: "6/12/16"
  },
  {
    status: "Active",
    rule: "Dump Truck Speeding SE",
    region: "Southeast",
    createdBy: "John James",
    createdDate: "2/24/16"
  },
  {
    status: "Inactive",
    rule: "Dump Truck Quick Acceleration",
    region: "All",
    createdBy: "Roger Martin",
    createdDate: "2/25/16"
  },
  {
    status: "Active",
    rule: "Dump Truck Speeding NE",
    region: "All",
    createdBy: "John James",
    createdDate: "2/24/16"
  },
  {
    status: "Active",
    rule: "Dump Truck Sudden Stop",
    region: "Southeast",
    createdBy: "John James",
    createdDate: "2/24/16"
  },
  {
    status: "Inactive",
    rule: "Vehicle Leave Southeast",
    region: "Southeast",
    createdBy: "Roger Martin",
    createdDate: "8/17/16"
  },
  {
    status: "Inactive",
    rule: "Vehicle Leave Northeast",
    region: "Northeast",
    createdBy: "Roger Martin",
    createdDate: "8/17/16"
  },
  {
    status: "Inactive",
    rule: "Vehicle Leave Midwest",
    region: "Midwest",
    createdBy: "Roger Martin",
    createdDate: "8/17/16"
  },
  {
    status: "Active",
    rule: "Dump Truck Engine Off",
    region: "All",
    createdBy: "John James",
    createdDate: "8/12/16"
  }
];

document.body.onload = renderData(vehicleData);

$("#refresh-data").click(renderData(vehicleData));

function renderData(data) {
  
  $("tbody").empty();

  for (let i = 0; i < data.length; i++) {
    let newRow = $("<tr class='slds-hint-parent'>");
    let cellRule = $("<td role='gridcell'>");
    let rule = cellRule.append(
      "<div class='slds-truncate' title='data[i].rule'>" +
        data[i].rule +
        "</div>"
    );
    let cellRegion = $("<td role='gridcell'>");
    let region = cellRegion.append(
      "<div class='slds-truncate' title='data[i].region'>" +
        data[i].region +
        "</div>"
    );
    let cellCreatedBy = $("<td role='gridcell'>");
    let createdBy = cellCreatedBy.append(
      "<div class='slds-truncate' title='data[i].createdBy'>" +
        data[i].createdBy +
        "</div>"
    );
    let cellCreatedDate = $("<td role='gridcell'>");
    let createdDate = cellCreatedDate.append(
      "<div class='slds-truncate' title='data[i].createdDate'>" +
        data[i].createdDate +
        "</div>"
    );
    let cellStatus = $("<td role='gridcell'>");
    let status = cellStatus.append(
      "<div class='slds-truncate' title='data[i].status'>" +
        data[i].status +
        "</div>"
    );

    newRow.append(
      cellRule,
      cellRegion,
      cellCreatedBy,
      cellCreatedDate,
      cellStatus
    );

    $("tbody").append(newRow);
  }
}

function toggleStatus() {}
