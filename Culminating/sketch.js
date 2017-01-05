//(accessed through IABIN data portal, AlgaeBase, http://200.144.189.73/portal/datasets/resource/4)

var table;
var organisms = [];

function preload() {
  table = loadTable("taxonomy-search-1398436937824.csv", "csv", "header", pushToArray);
}

function pushToArray() {
  for (var i = 0; i < countProps(table.getObject()); i++) {
    //console.log[1];
    organisms.push(new Organism(table.getObject()[i]));
  }
  table = undefined;
  console.log(countProps(table.getObject()));
  console.log("done array: "+ millis());
}

function setup() {
console.log("Setup:"+ millis());
}



function draw() {}

//FOR SOME REASON .LENGTH DOES NOT WORK ON table.getObject().length
function countProps(obj) {
    var count = 0;
    for (var p in obj) {
      obj.hasOwnProperty(p) && count++;
    }
    return count; 
}

/*
  
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
*/