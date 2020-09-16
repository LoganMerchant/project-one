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
      `https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=${searchInfo}`
    )
    .then(function(wikiResponse){
      var wikiData = wikiResponse.json();
        return wikiData;
    })
    .then(function (wikiData){
      console.log(wikiData)

      // var wikiLink = wikiData.[3].[0]
    })
    
  //   })
}

// var wikihUrl =
//   'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=';
// var contentUrl =
//   'https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json&titles=';



// var counter = 0;

// function setup() {
//   // noCanvas();
  
//   // searchInfo.changed(startSearch);
//   goWiki(userInput.value());

//   function startSearch() {
//     counter = 0;
//     goWiki(userInput.value());
//   }

//   function goWiki(searchInfo) {
//     counter = counter + 1;

//     if (counter < 10) {
//       //var term = userInput.value();
//       var url = wikihUrl + searchInfo;
//       loadJSON(url, gotSearch, 'jsonp');
//     }
//   }

//   function gotSearch(wikiData) {
//     console.log(wikiData);
//     var len = wikiData[1].length;
//     var index = floor(random(len));
//     var title = wikiData[1][index];
//     title = title.replace(/\s+/g, '_');
//     createDiv(title);
//     console.log('Querying: ' + title);
//     var url = contentUrl + title;
//     loadJSON(url, gotContent, 'jsonp');
//   }

//   function gotContent(wikiData) {
//     var page = wikiData.query.pages;
//     var pageId = Object.keys(wikiData.query.pages)[0];
//     console.log(pageId);
//     var content = page[pageId].revisions[0]['*'];
//     console.log(content);
//     var wordRegex = /\b\w{4,}\b/g;
//     var words = content.match(wordRegex);
//     var word = random(words);
//     goWiki(word);
//     console.log(word);
//   }
// }
