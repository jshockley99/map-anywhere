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
  $("ul").empty();

  for (let i = 0; i < data.length; i++) {
    let newItem = $("<li class='slds-item'>").append(
      "<article class='slds-tile slds-tile_board'></article>"
    );
    let rule = $(
      "<h3 class='slds-tile__title slds-truncate'>" + data[i].rule + "</h3>"
    );
    let divWrapper = $("<div class='slds-tile__detail'></div>");
    let region = $("<p class='slds-truncate'>" + data[i].region + "</p>");
    let createdBy = $("<p class='slds-truncate'>" + data[i].createdBy + "</p>");
    let createdDate = $(
      "<p class='slds-truncate'>" + data[i].createdDate + "</p>"
    );
    let status = $(
      "<div class='slds-truncate'><button class='slds-button slds-button_neutral toggle' data-state='" +
        data[i].status +
        "'>" +
        data[i].status +
        "</button></div>"
    );

    divWrapper.append(region, createdBy, createdDate, status);
    newItem.append(rule, divWrapper);

    $("ul").append(newItem);
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
  $("div.demo-only-spinner").toggleClass("show hide");
}

function showToast() {
  $("div.demo-only-toast").toggleClass("hide show");
}

function closeToast() {
  $("div.demo-only-toast").toggleClass("show hide");
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
  $("div.demo-only-spinner").toggleClass("hide show");

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
