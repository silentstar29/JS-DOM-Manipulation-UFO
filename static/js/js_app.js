// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody= d3.select("tbody");

function buildTable(data){
    tbody.html("");
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
buildTable(tableData);

var submit= d3.select("#filter-btn")

    submit.on("click",function ufo(){
    d3.event.preventDefault();

    var inputElement=d3.select("#datetime");
    var inputValue=inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);
    
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
    
    console.log(filteredData);

    //d3.selectAll("#form-control").remove();

buildTable(filteredData);
    
});