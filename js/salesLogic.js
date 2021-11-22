d3.csv("Business/Collages.csv").then((importedData) => {
    var data = importedData; 
    var collage_titles =  data.map((row) => row.TITLE);
    var proposed_prices = data.map((row) => row.PROPOSEDPRICE);

    //populate dropdown with d3
    d3.select("#dropdown")
    .selectAll("option")
    .data(collage_titles)
    .enter()
    .append("option")
    .text(function (title) { 
        return title;
    });

    //set up listener for drop down menu
    var dropdownMenu = d3.selectAll("#dropdown");
    dropdownMenu.on("change", filterPage);

    //define function
    function filterPage() {
        //display price, thumbnail, and title
        
        
        d3.select("#title")
          .append("h3")
          .text();
          
    }
});