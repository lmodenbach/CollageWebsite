//create dataset of collage titles
d3.csv("Business/Collages.csv").then((importedData) => {
    var data = importedData; 
    var collage_titles =  data.map((row) => row.TITLE);

//populate dropdown menu using d3
    d3.select("#dropdown")
    .selectAll("option")
    .data(collage_titles)
    .enter()
    .append("option")
    .text(function (title) {
        return title;
    });

    d3.select("#dropdown")
    .append("option")
    .text("Home");
});