//todo write all code

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
                var img = document.createElement("img");
                img.setAttribute("src", data.image);
                img.setAttribute("class", "recipe-img");
                container.appendChild(img);
                var desc = data.summary;
                var summary = document.createElement("p");
                summary.setAttribute("class", "recipe-description");
                summary.innerHTML = desc;
                container.appendChild(summary);
                var ingText = document.createElement("p");
                ingText.setAttribute("class", "ingredient-header");
                ingText.textContent = "Ingredients";
                summary.appendChild(ingText);
                var table = document.createElement("table"); 
                table.border = '1'; //extendedIngredients[0].originalString
                table.setAttribute("style", "width: 100%");
                var tableBody = document.createElement("tbody");
                table.appendChild(tableBody);
                var ingredients = data.extendedIngredients;
                var numRows = Math.floor(ingredients.length /2); //extendedIngredients[0].originalString extendedIngredients
                for(i=0; i<numRows; i++) {
                    var tr = document.createElement("tr");
                    tableBody.appendChild(tr);
                }
                for (var j = 0; j< ingredients.length; j++) {
                    var ing = ingredients[j].originalString;
                    var td = document.createElement("td");
                    td.width = '100px';
                    td.setAttribute("border", "1px solid black");
                    td.appendChild(document.createTextNode(ing));
                    tr.appendChild(td);
                }
                summary.appendChild(table);
                var insText = document.createElement("p");
                insText.setAttribute("class", "recipe-instruction-header");
                insText.textContent = "Instructions";
                summary.appendChild(insText); //analyzedInstructions[0].steps analyzedInstructions[0].steps[0].step
                var instruc = data.analyzedInstructions[0].steps;
                var list = document.createElement("ul");
                list.setAttribute("class", "group-list");
                summary.appendChild(list);
                for(i = 0; i < instruc.length; i++) {
                    var insText = document.createElement("li");
                    insText.textContent = instruc[i].step;
                    list.appendChild(insText);

                }
            });
        }
    })
    .catch(err => {
        console.log(err);
    });
    }; 


getRecipeList("vietnamese")