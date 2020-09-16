var button = $(".btn");
var searchInfo = $(".form-control").val();
var list = JSON.parse(localStorage.getItem("headlines")) || [];
var key = `pZwZYOOhZZTfRVT0WHKsRuANSpS6D0wl`;
var nytInfo = document.querySelector(".nyt-info");
// click on button
//NYT Section
$(button).on("click", function (event) {
  event.preventDefault();

  searchInfo = $(".form-control").val();
  $("form-control").empty();
  console.log(searchInfo);
  // make sure to enter a valid search item
  if (searchInfo === "") {
    alert("input a country please");
  } else {
    list.push(searchInfo);
    localStorage.setItem("headlines", JSON.stringify(list));

    getNews(searchInfo);
    wikiInfo(searchInfo)
  }
});
function getNews() {
  fetch(
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchInfo}&api-key=${key}`
  )
    // sending the info to NYT
    .then(function (response) {
      var data = response.json();
      return data;
      console.log(data);
    })
    .then(function (data) {
      //getting the info from NYT
      console.log(data);

      var newsImg = document.querySelector("#news-img");
      var pictureDisplay = document.createElement("img");
      var headline = data.response.docs[0]?.headline?.main;
      var firstPara = data.response.docs[0]?.lead_paragraph;
      if(firstPara.length >= 500){
        firstPara = firstPara.slice(0, 500) + "..."
      }
      var nytLink = data.response.docs[0]?.web_url;
      
      
      if(data.response.docs[0]?.multimedia[0]?.legacy?.xlarge){

      
        pictureDisplay.setAttribute(
        "src",
        "https://www.nytimes.com/" +
          data.response.docs[0]?.multimedia[0]?.legacy?.xlarge
      );
      newsImg.appendChild(pictureDisplay);

      pictureDisplay.setAttribute("width", 300);
    }

      //displaying the items from NYT
      $("#news-img").html("");
      $("#output-h1").html("");
      $("#output-h2").html("");
      $(".nyt-link").html("");

      // $("#news-img").append(newsImg);
      newsImg.appendChild(pictureDisplay);
      $("#output-h1").append(headline);
      $("#output-h2").append(firstPara);
      $(".nyt-link").html(
        `<a href="${nytLink}/" target="_blank">Read Article</a>`
      );
      
    });
}
// wiki section
 

function wikiInfo(){
  fetch(
      // Make a fetch request to Wikipedia to get a random article title
      `https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&prop=info&format=json&titles=${searchInfo}&prop=description`
    )
    .then(function(wikiResponse){
      var wikiData = wikiResponse.json();
        return wikiData;
    })
    .then(function (wikiData){
      console.log(wikiData)
      
        
         
        var keys = Object.keys(wikiData.query.pages)
        var pageId = wikiData.query.pages[keys[0]].pageid
        var wikiDescript = wikiData.query.pages[keys[0]].description
        var wikiTitle = wikiData.query.pages[keys[0]].title
        // console.log(pageId)
        
        $("#wiki-h2").html("");
        $("#wiki-h1").html("");

        $("#wiki-h2").append(wikiDescript)
        $("#wiki-h1").append(wikiTitle)
        $("#wiki-link").html(`<a href="https://en.wikipedia.org/wiki/${searchInfo}" target="_blank">Read Wiki Page</a>`)
      
    })
    

}


