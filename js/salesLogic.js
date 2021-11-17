d3.csv("Business/Collages.csv").then((importedData) => {
    var data = importedData; 
    var collage_titles =  data.map((row) => row.TITLE);
    var proposed_prices = data.map((row) => row.PROPOSEDPRICE);

    d3.select("#dropdown")
    .selectAll("option")
    .data(collage_titles)
    .enter()
    .append("option")
    .text(function (title) { 
        return title;
    });
});