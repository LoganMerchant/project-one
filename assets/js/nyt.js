var button = $(".btn");
var newsSearch = $(".form-control").val();
var list = JSON.parse(localStorage.getItem("headlines")) || [];
var key = `pZwZYOOhZZTfRVT0WHKsRuANSpS6D0wl`;
var nytInfo = document.querySelector(".nyt-info");
// click on button
//NYT Section
$(button).on("click", function (event) {
  event.preventDefault();

  newsSearch = $(".form-control").val();
  $("form-control").empty();
  console.log(newsSearch);
  // make sure to enter a valid search item
  if (newsSearch === "") {
    alert("input a country please");
  } else {
    list.push(newsSearch);
    localStorage.setItem("headlines", JSON.stringify(list));

    getNews(newsSearch);
    // wikiInfo(newsSearch)
  }
});
function getNews() {
  fetch(
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${newsSearch}&api-key=${key}`
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
//wiki section

// function wikiInfo(){
//   fetch(
//       // Make a fetch request to Wikipedia to get a random article title
//       `https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=${newsSearch}&limit=1&suggest=1`
//     )
//     .then(function(wikiResponse){
//       var wikiData = wikiResponse.json();
//         return wikiData;
//     })
//     .then(function (wikiData){
//       console.log(wikiData)

//       // var wikiLink = wikiData.[3].[0]
//     })
  
//   //   })
// }
