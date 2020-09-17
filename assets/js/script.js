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
    wikiInfo(searchInfo);
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
      if (firstPara.length >= 500) {
        firstPara = firstPara.slice(0, 500) + "...";
      }
      var nytLink = data.response.docs[0]?.web_url;

      if (data.response.docs[0]?.multimedia[0]?.legacy?.xlarge) {
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

function wikiInfo() {
  fetch(
    // Make a fetch request to Wikipedia to get a article title
    `https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&prop=info&format=json&titles=${searchInfo}&prop=description`
  )
    .then(function (wikiResponse) {
      var wikiData = wikiResponse.json();
      return wikiData;
    })
    .then(function (wikiData) {
      console.log(wikiData);

      var keys = Object.keys(wikiData.query.pages);
      // var pageId = wikiData.query.pages[keys[0]].pageid;
      var wikiDescript = wikiData.query.pages[keys[0]].description;
      var wikiTitle = wikiData.query.pages[keys[0]].title;
      // console.log(pageId)

      $("#wiki-h2").html("");
      $("#wiki-h1").html("");

      $("#wiki-h2").append(wikiDescript);
      $("#wiki-h1").append(wikiTitle);
      $("#wiki-link").html(
        `<a href="https://en.wikipedia.org/wiki/${searchInfo}" target="_blank">Read Wiki Page</a>`
      );
    });
}

//Recipe section

var container = document.querySelector("#container");

var cuisine;

getRecipeList = (cuisine) => {
    fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?&cuisine=" + cuisine, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
            "x-rapidapi-key": "79e10edf99msh072ae77a6cce95cp11389ejsn0ed4bd32fa6a"
        }
    }).then(response => {
if(response.ok) {
    response.json().then(function(data) {
        console.log(data);
        console.log(data.results[0].id, data.results[0].title);
        var title = document.querySelector("#title");
        title.textContent += " " + data.results[0].title;
        id = data.results[0].id;
       getRecipe(id);
    })
}
});

};


    getRecipe = (id) => {
        fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/" + id + "/information", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
            "x-rapidapi-key": "79e10edf99msh072ae77a6cce95cp11389ejsn0ed4bd32fa6a"
        }
    })
    .then(response => { 
        if(response.ok) {
            response.json().then(function(data){ 
                console.log(data);
               //put the description in
               var desc = data.summary;
               var description = document.createElement("h4");
               description.setAttribute("class", "recipe-description");
               description.innerHTML = desc;
               container.appendChild(description);
               var ingTitle = document.createElement("p");
               ingTitle.setAttribute("class", "ingredient-header");
               ingTitle.textContent = "Ingredients";
               container.appendChild(ingTitle);
               //create a new container for the ingredients, and image
               var ingDiv = document.createElement("div");
               ingDiv.setAttribute("class", "recipe-div");
               var imgLink = data.image;
               var img = document.createElement("img");
               img.setAttribute("class", "recipe-img");
               img.setAttribute("src", imgLink);
               ingDiv.appendChild(img);
               var list1Div = document.createElement("div");
                list1Div.setAttribute("class", "recipe-ingredients");
                var list2Div = document.createElement("div");
                list2Div.setAttribute("class", "recipe-ingredients"); //extendedIngredients[0].originalString
                var ingList = data.extendedIngredients;
                var list1 = document.createElement("ul");
                list1.setAttribute("class", "recipe-ingredients");
                var numRows = Math.ceil(ingList.length / 2);
                for(var i = 0; i< numRows; i++) {
                    var item = document.createElement("li");
                    item.textContent = ingList[i].originalString;
                    list1Div.appendChild(item);
                }
                ingDiv.appendChild(list1Div);
                for(i = numRows + 1; i<ingList.length; i++) {
                    var item1 = document.createElement("li");
                    item1.textContent = ingList[i].originalString;
                    list2Div.appendChild(item1);
                }
                ingDiv.appendChild(list2Div);
                container.appendChild(ingDiv);
                var insTitle = document.createElement("p");
                insTitle.setAttribute("class", "recipe-instruction-header");
                insTitle.textContent ="Instructions";
                container.appendChild(insTitle);
                var inst = data.analyzedInstructions[0].steps; //analyzedInstructions[0].steps[0].step
                var instructionDiv = document.createElement("div");
                var insList = document.createElement("ul");
               // insList.setAttribute("class", )
                instructionDiv.setAttribute("class", "instruction-div");
                for(i=0; i<inst.length; i++) {
                    var instruction = document.createElement("li");
                    instruction.textContent=inst[i].step;
                    insList.appendChild(instruction);
                }
                instructionDiv.appendChild(insList);
                container.appendChild(instructionDiv);

            });
        }
    })
    .catch(err => {
        console.log(err);
    });
    }; 

    searchParam = () => {
        var paramString = window.location;
        var searchParams = new URLSearchParams(paramString);
        var country = searchParams.get("search");
        country = country.toString();
       country = country.substring(2,country.length);
        console.log(country);
        getRecipeList(country);
    };

//searchParam();

//end of recipe section