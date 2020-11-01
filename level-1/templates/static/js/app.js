// from data.js
var tableData = data;



// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    //d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    console.log(inputValue);
    // console.log(people);
  
    let filteredData = tableData;

    // Check to see if a date was entered and filter the
    // data using that date.
    if (inputValue) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.datetime === inputValue);
    }
    console.log(filteredData);
    generateTable(filteredData);

  };
  
// city
// comments
// country
// datetime
// durationMinutes
// shape
// state


function generateTable(tdata){

    // this clears the cache.
    tbody.html(""),
    // Create the table
    tdata.forEach((data) => {
        var row = tbody.append("tr");
        Object.entries(data).forEach(([key,value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });
};

// var tbody = d3.select("tbody");
// var row = Object.keys(tableData[0])
// Select the button
var button = d3.selectAll("#filter-btn");

// Select the form
// var form = d3.select(".form-group");

// Create event handlers 
button.on("click", runEnter);
// form.on("submit",runEnter);


// YOUR CODE HERE!
// console.log(tableData)
// Get a reference to the table body
var tbody = d3.select("tbody");
generateTable(tableData)