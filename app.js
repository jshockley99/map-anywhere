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

function renderData(data) {
  $("tbody").empty();

  for (let i = 0; i < data.length; i++) {
    let newRow = $("<tr class='slds-hint-parent'>");
    let cellRule = $("<td role='gridcell'>");
    let rule = cellRule.append(
      "<div class='slds-truncate'>" + data[i].rule + "</div>"
    );
    let cellRegion = $("<td role='gridcell'>");
    let region = cellRegion.append(
      "<div class='slds-truncate'>" + data[i].region + "</div>"
    );
    let cellCreatedBy = $("<td role='gridcell'>");
    let createdBy = cellCreatedBy.append(
      "<div class='slds-truncate'>" + data[i].createdBy + "</div>"
    );
    let cellCreatedDate = $("<td role='gridcell'>");
    let createdDate = cellCreatedDate.append(
      "<div class='slds-truncate'>" + data[i].createdDate + "</div>"
    );
    let cellStatus = $("<td role='gridcell'>");
    let status = cellStatus.append(
      "<div class='slds-truncate'><button class='slds-button slds-button_neutral toggle' data-state='" +
        data[i].status +
        "'>" +
        data[i].status +
        "</button></div>"
    );

    newRow.append(rule, region, createdBy, createdDate, status);

    $("tbody").append(newRow);
  }
}

function filterRule() {
  let selectedRule = $("#search").val();
  let dataByRule = vehicleData.filter(index =>
    index.rule.includes(selectedRule)
  );
  renderData(dataByRule);
  $("input").val("");
}

function filterRegion() {
  let selectedRegion = $("#select-filter").val();
  let dataByRegion = vehicleData.filter(index =>
    index.region.includes(selectedRegion)
  );
  renderData(dataByRegion);
}

function hideSpinner() {
  $("div.slds-align_absolute-center").toggleClass("show hide");
}

function showToast() {
  $("div.demo-only").toggleClass("hide show");
}

function closeToast() {
  $("div.demo-only").toggleClass("show hide");
}

function toggleStatus() {
  let state = $(this).attr("data-state");
  if (state === "Active") {
    $(this).text("Inactive");
    $(this).attr("data-state", "Inactive");
  } else {
    $(this).text("Active");
    $(this).attr("data-state", "Active");
  }
  $("div.slds-align_absolute-center").toggleClass("hide show");

  setTimeout(hideSpinner, 999);

  setTimeout(showToast, 1000);
}

document.body.onload = renderData(vehicleData);

$("#refresh-data").click(function() {
  renderData(vehicleData);
  $("select").val("");
});

$("#search").change(function() {
  filterRule();
  $("select").val("");
});

$("#select-filter").change(function() {
  filterRegion();
});

$(".toggle").click(toggleStatus);

$("#close").click(closeToast);
