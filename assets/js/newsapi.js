var newsButton = document.querySelector("#newsButton");
var newsBox = document.querySelector("#newsBox");
var summary = [];


getHeadlines = ()=> {
  fetch("https://bing-news-search1.p.rapidapi.com/news?count=5&cc=us&safeSearch=Strict&headlineCount=5&textFormat=Raw", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
		"x-rapidapi-key": "79e10edf99msh072ae77a6cce95cp11389ejsn0ed4bd32fa6a",
		"x-bingapis-sdk": "true",
		"accept-language": "en"
	}
}).then(function(response) {
    if(response.ok) {
      response.json().then(function(data){
        console.log(data);
        for(i=0; i<5; i++) {//value[0].image.thumbnail.contentUrl 
          var title = data.value[i].name;
          var text = data.value[i].description;
          var up = document.createElement("h3");
          up.setAttribute("class", "item");
          up.textContent = title;
          var par = document.createElement("p");
          par.setAttribute("class", "summary");
          var img = document.createElement("img");
          img.setAttribute("class", "images");
          img.src = data.value[i].image.thumbnail.contentUrl;
         par.innerHTML = text + " <a href = '" + data.value[i].url + "'>" + data.value[i].provider[0].name + "</span>";
          newsBox.appendChild(up);
          newsBox.appendChild(par);
          newsBox.appendChild(img);
        }
      });
    }
    });
};


$(newsButton).on("click", function(){
  getHeadlines();
 
});


