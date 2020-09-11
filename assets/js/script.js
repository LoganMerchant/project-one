// var api = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=7aa4007d232b4971be8c8b229d1ca299'

// fetch(api)
// .then(function (response) {
//   var data = response.json();
//   return data;
//   console.log(data)
// })
// .then(function (data) {
//     console.log(data)

//   })
// var url =
// "http://newsapi.org/v2/everything?" +
// "q=Apple&" +
// "from=2020-09-10&" +
// "sortBy=popularity&" +
// "apiKey=7aa4007d232b4971be8c8b229d1ca299";

// function myFunction() {
// var searchTerm = document.querySelector("format-control").value;

//   var req = new Request(url);

//   fetch(req).then(function (response) {
//     console.log(response.json());

//   })
//   .then(function(response) {
//     console.log(response.data[0]);

//     var responseContainerEl = document.querySelector('#response-container')

//     responseContainerEl.innerHTML = ''

//     var newsHeadline = document.createElement('div')
//     // newsHeadline.setAttribute
//   })
// }
var button = $(".btn");
var newsSearch = $(".form-control").val();
var list = JSON.parse(localStorage.getItem("headlines")) || [];
var key = `pZwZYOOhZZTfRVT0WHKsRuANSpS6D0wl`;

$(button).on("click", function (event) {
  event.preventDefault();

  newsSearch = $(".form-control").val();
  $("form-control").empty();
  console.log(newsSearch);

  if (newsSearch === "") {
    alert("input a topic please");
  } else {
    list.push(newsSearch);
    localStorage.setItem("headlines", JSON.stringify(list));

    getNews(newsSearch);
  }
});
function getNews() {
  fetch(
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${newsSearch}&api-key=${key}`
  )
    .then(function (response) {
      var data = response.json();
      return data;
      console.log(data);
    })
    .then(function (data) {
      console.log(data);
      // need to create an <img place for the picture
      // var picture = data.response.docs[0].multimedia[0].url;
      var headline = data.response.docs[0].headline.main;
      var firstPara = data.response.docs[0].lead_paragraph
      
      $("#output-h1").append(headline);
      $("#output-h2").append(firstPara);
      
    });
}
