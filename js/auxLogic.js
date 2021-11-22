//create dataset and read collage titles
d3.csv("Business/Collages.csv").then((importedData) => {
    var data = importedData; 
    var collage_titles =  data.map((row) => row.TITLE);

//get collage title
    var path = window.location.pathname;
    var page = path.split("/").pop();
    var pageArray = page.split(".");
    var squashCollageTitle = pageArray[0];
    var collageTitle = ""; 
        collage_titles.forEach(el => {
            if (el.replace(" ", "") === squashCollageTitle) {
                collageTitle = el;
            }
          }); 

//populate dropdown menu using d3
    var dropDownTitles = collage_titles.unshift("Home");
    
    d3.select("#dropdown")
    .selectAll("option")
    .data(dropDownTitles)
    .enter()
    .append("option")
    .text(function (title) { 
        return title;
    })
    .property("selected", function (title) { 
        return title === collageTitle; 
    });

//set up listener for drop down menu
    var dropdownMenu = d3.selectAll("#dropdown");
    dropdownMenu.on("change", filterPage); 
        
//populate page title using d3
    d3.select("title")
    .text(collageTitle);

//define dropdown function
    function filterPage() {

        if (d3.event != null) {
            d3.event.preventDefault();
          }

//redirect page
        var userSelect = d3.select("#dropdown option:checked").text(); 

        if (userSelect === "Home")
            window.location.href = "../index.html";

        else {
            var linkTitle = userSelect.split(" ").join("");
            window.location.href = "../" + linkTitle + ".html"; 
        }   
    }
});