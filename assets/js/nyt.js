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
      var headline = data.response.docs[0].headline.main;
      var firstPara = data.response.docs[0].lead_paragraph;
      var nytLink = data.response.docs[0].web_url;

      // for (
      //   var i = 0;
      //   newsImg === undefined ||
      //   headline === undefined ||
      //   firstPara === undefined ||
      //   nytLink === undefined;
      //   i++
      // ) {
      //   var newsImg = document.querySelector("#news-img");
      //   pictureDisplay = (
      //     "src",
      //     "https://www.nytimes.com/" +
      //       data.response.docs[i].multimedia[i].legacy.xlarge);
      //   var headline = data.response.docs[i].headline.main;
      //   var firstPara = data.response.docs[i].lead_paragraph;
      //   var nytLink = data.response.docs[i].web_url;
      // } {
// console.log(nytLink)
        pictureDisplay.setAttribute(
        "src",
        "https://www.nytimes.com/" +
          data.response.docs[0].multimedia[0].legacy.xlarge
      );

      pictureDisplay.setAttribute("width", 300);

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
      `https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&format=json&titles=${searchInfo}&prop=description&prop=description&prop=info%20Page`
    )
    .then(function(wikiResponse){
      var wikiData = wikiResponse.json();
        return wikiData;
    })
    .then(function (wikiData){
      console.log(wikiData)
      
    //  var wikiLink = wikidata.query.pages[5058739].links[0].title;
    //  var wikiDescript = 
        var wikiTitle = wikiData.query.pages[10577].title
        $("#wiki-h1").html("");
        $("#wiki-h1").append(wikiTitle) 
    })
    

}


