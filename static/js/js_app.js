// Assign the data from `js_data.js` to a descriptive variable
var tableData = data;

// Get a reference to the table body
var tbody= d3.select("tbody");
// Create function buildTable to hold the table
function buildTable(data){
    tbody.html("");
    
// Loop through data and append one table row `tr` for each object
//Append a cell `td` to each row for each value
data.forEach(function(ufo){
    var row =tbody.append("tr");
    row.append("td").text(ufo.datetime);
    row.append("td").text(ufo.city);
    row.append("td").text(ufo.state);
    row.append("td").text(ufo.country);
    row.append("td").text(ufo.shape);
    row.append("td").text(ufo.durationMinutes);
    row.append("td").text(ufo.comments);
});
};
//Call the function buildTable with tableData
buildTable(tableData);
// Select the submit button
var submit= d3.select("#filter-btn")
    submit.on("click",function ufo(){
// Prevent the page from refreshing
    d3.event.preventDefault();
// Select the input element and get the raw HTML node
    var inputElement=d3.select("#datetime");
// Get the value property of the input element
    var inputValue=inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);
// Run if statement and assign a variable to hold filtered value  
    if (inputValue.length>0){
    var filteredData=tableData.filter(tableData=> tableData.datetime===inputValue);
    }
    var inputElement=d3.select("#city");
    var inputValue=inputElement.property("value");

    if (inputValue.length>0){
        var filteredData=tableData.filter(tableData=> tableData.city===inputValue);}

    var inputElement=d3.select("#state");
    var inputValue=inputElement.property("value");

    if (inputValue.length>0){
        var filteredData=tableData.filter(tableData=> tableData.state===inputValue);}

    var inputElement=d3.select("#country");
    var inputValue=inputElement.property("value");

    if (inputValue.length>0){
        var filteredData=tableData.filter(tableData=> tableData.country===inputValue);}

    var inputElement=d3.select("#shape");
    var inputValue=inputElement.property("value");

    if (inputValue.length>0){
        var filteredData=tableData.filter(tableData=> tableData.shape===inputValue);}
        
// Console log filtered data  
    console.log(filteredData);

// Call buildTable function with filtered data
buildTable(filteredData);
    
});
