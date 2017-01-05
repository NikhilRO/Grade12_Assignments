//(accessed through IABIN data portal, AlgaeBase, http://200.144.189.73/portal/datasets/resource/4)

var table;

function preload() {
  table = loadTable("taxonomy-search-1398436937824.csv", "csv", "header");
}

function setup() {
  console.log(millis());
  //count the columns
  print(table.getRowCount() + " total rows in table");
  print(table.getColumnCount() + " total columns in table");

  //print(table.getColumn("Class"));
  //["Goat", "Leopard", "Zebra"]

  print(table.getString(0, 0));
  //console.log(table.getString(10, 23990));
  //cycle through the table
  // for (var r = 0; r < table.getRowCount(); r++) {
  //   for (var c = 0; c < table.getColumnCount(); c++) {
  //     print(table.getString(r, c));
  //   }
  // }
}


function draw() {
}