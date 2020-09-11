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
      var nytLink = data.response.docs[0].web_url
      // console.log(nytLink)

      $("#output-h1").append(headline);
      $("#output-h2").append(firstPara);
      $('.nyt-link').html(`<a href="${nytLink}/" target="_blank">Read Article</a>`);
      
    });
}
