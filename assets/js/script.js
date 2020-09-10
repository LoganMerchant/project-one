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

$(button).on("click", function (event) {
  event.preventDefault();
  
  newsSearch = $(".form-control").val();
  $("form-control").empty();
  console.log(newsSearch)

  if (newsSearch === "") {
    alert("input a topic please");
  } else {
    list.push(newsSearch);
    localStorage.setItem("headlines", JSON.stringify(list));

    getNews(newsSearch);
  }
})
function getNews(){

  // var searchTerm = document.querySelector('.form-control').value;

  fetch(`https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/everything?q=${newsSearch}&apiKey=7aa4007d232b4971be8c8b229d1ca299`)
 

  .then(a => a.json())
  .then(response=> {
    console.log(response)
    for(var i = 0; i < response.articles.length; i++ ){
      document.getElementById("output").innerHTML += "<div style='padding-top: 20px;'><img style='float: left; width: 150px:' src='" + response.articles[i].urlToImage + "'><h1>"+response.articles[i].title + "</h1>" + response.articles[i].source.name + "<br>"+response.articles[i].description+" <a href='"+response.articles[i].url+"'target='_blank'>"+response.articles[i].url+"</a></div>";
      }
    })
  }
 