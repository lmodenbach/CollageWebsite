//create dataset and read collage titles
d3.csv("Business/Collages.csv").then((importedData) => {
    var data = importedData; 
    var collage_titles = data.map((row) => row.TITLE);

//populate tab title using d3
    d3.select("title")
    .text("Home");

//populate page title
    d3.select("#pageTitle")
      .html(`<h1><b>Welcome To My World!</b></h1><br><br>`);  

//populate image
    d3.select("#homeImage")
      .append("img")
      .attr("src", "media/WarmDreams.jpg");
      
//populate announcement
    d3.select("#announcement")
      .html(`<h3><b>Announcements:</b></h3><br><h4>Better images and further improvements to come!</h4><br><br><br>`);

//populate dropdown menu using d3
    collage_titles.unshift("Home");
    var dropDownTitles = collage_titles;

    d3.select("#dropdown")
    .selectAll("option")
    .data(dropDownTitles)
    .enter()
    .append("option")
    .text(function (title) { 
        return title;
    });

    collage_titles.shift();

//set up listener for drop down menu
    var dropdownMenu = d3.selectAll("#dropdown");
    dropdownMenu.on("change", filterPage);
 
//define dropdown function
    function filterPage() {

        if (d3.event != null) {
            d3.event.preventDefault();
          }

//redirect page
        var userSelect = d3.select("#dropdown option:checked").text(); 

        var linkTitle = userSelect.split(" ").join("");
        window.location.href = "../" + linkTitle + ".html";        
    }
});