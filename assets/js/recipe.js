//todo: make it prettier

var container = document.querySelector("#container");

var cuisine;

//get the list of recipies based on cuisine type == get the id for the first recipe
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
        //get the title and display it
        var title = document.querySelector("#title");
        title.textContent += " " + data.results[0].title;
        //get the id for the next function
        id = data.results[0].id;
       getRecipe(id);
       console.log(cuisine);
    })
}
});

};

    //based upon the id, get the details for the recipe
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
               //put the description in
               var desc = data.summary;
               var description = document.createElement("h4");
               description.setAttribute("class", "recipe-description");
               //set the description--using innerHTML so that the links they give us will work
               description.innerHTML = desc;
               container.appendChild(description);
               var ingTitle = document.createElement("p");
               ingTitle.setAttribute("class", "ingredient-header");
               ingTitle.textContent = "Ingredients";
               container.appendChild(ingTitle);
               //create a new container for the ingredients, and image
               var ingDiv = document.createElement("div");
               ingDiv.setAttribute("class", "recipe-div");
               //get the image they provide and display it
               var imgLink = data.image;
               var img = document.createElement("img");
               img.setAttribute("class", "recipe-img");
               img.setAttribute("src", imgLink);
               ingDiv.appendChild(img);
               //create two lists for ingredients--split them into two
               var list1Div = document.createElement("div");
                list1Div.setAttribute("class", "recipe-ingredients");
                var list2Div = document.createElement("div");
                list2Div.setAttribute("class", "recipe-ingredients"); 
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
                //get the instructions, if any, and display them
                var insTitle = document.createElement("p");
                insTitle.setAttribute("class", "recipe-instruction-header");
                insTitle.textContent ="Instructions";
                container.appendChild(insTitle);
                var inst = data.analyzedInstructions[0].steps; 
                var instructionDiv = document.createElement("div");
                var insList = document.createElement("ul");
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

    //get the search parameter (cuisine) and use it to search the recipies
    searchParam = () => {
        var paramString = window.location;
        var searchParams = new URLSearchParams(paramString);
        var country = searchParams.get("search");
        country = country.toString();
       country = country.substring(2,country.length);
        console.log(country);
        getRecipeList(country);
    };

searchParam();