//Recipe Card Section

const cuisines = {
    "belarus": "Eastern European",
    "ukraine" : "Eastern European",
    "estonia" : "Eastern European",
    "latvia" : "Eastern European",
    "lithuania" : "Eastern European",
    "moldova": "Eastern European",
    "czech republic" : "European",
    "benin" : "African",
    "central african republic": "African",
    "burundi" : "African",
    "hungary" : "European",
    "england": "British",
    "britain": "British",
    "scotland" : "British",
    "wales" : "British",
    "china" : "Chinese",
    "italy" : "Italian",
    "france": "French",
    "vietnam": "Vietnamese",
    "mexico" : "Mexican",
    "america": "American",
    "canada" : "American",
    "us" : "American",
    "usa" : "American",
    "georgia" : "Southern",
    "florida" : "Southern",
    "louisiana" : "Cajun",
    "south carolina" : "Southern",
    "north carolina" : "Southern",
    "korea" : "Korean",
    "greece" : "Greek",
    "brasil" : "Latin American",
    "peru" : "Latin American",
    "chile" : "Latin American",
    "south africa" : "African",
    "botswana" : "African", 
    "germany" : "German",
    "denmark" : "Nordic",
    "norway" : "Nordic",
    "iceland" : "Nordic",
    "greenland" : "Nordic",
    "egypt" : "Mediterranean",
    "spain" : "Spanish",
    "japan" : "Japanese",
    "indonesia" : "Asian",
    "poland" : "Eastern European",
    "russia" : "Eastern European",
    "romania" : "Eastern European",
    "slovakia" : "Eastern European",
    "albania" : "Greek",
    "montenegro" : "Mediterranean",
    "el salvador" : "Latin American",
    "honduras": "Latin American",
    "costa rica" : "Latin American",
    "belize" : "Caribbean",
    "barbados": "Caribbean",
    "bahamas" : "Caribbean",
    "ecuador" : "Latin American",
    "portugul" : "Spanish",
    "jamaica" : "Caribbean",
    "trinidad and tobago" : "Caribbean",
    "virgin islands" : "Caribbean",
    "bermuda" : "Caribbean",
    "switzerland": "European",
    "austria" : "German",
    "cyprus" : "Greek",
    "netherlands": "European",
    "bulgaria" : "Eastern European",
    "finland" : "Nordic",
    "sweden" : "Nordic",
    "slovenia": "Eastern European",
    "ireland" : "Irish",
    "israel" : "Jewish",
    "india" : "Indian",
    "pakistan" : "Indian",
    "thailand" : "Thai",
    "croatia" : "Eastern European",
    "belgium" : "European",
    "luxembourg" : "European",
    "australia" : "British",
    "new zealand" : "British",
    "nigeria" : "African",
    "angola" : "African",
    "ethiopia" : "African",
    "tanzania" : "African",
    "kenya" : "African",
    "uganda" : "African",
    "algeria" : "Mediterranean",
    "afghanistan" : "Middle Eastern",
    "chad" : "African",
    "morocco" : "Mediterranean",
    "sudan" : "Middle Eastern",
    "yemen" : "Middle Eastern",
    "oman" : "Middle Eastern",
    "niger" : "African",
    "democratic republic of congo" : "African",
    "congo": "African",
    "mozambique" : "African",
    "ghana" : " African",
    "côte d'ivoire" : "African",
    "ivory coast" : "African",
    "burkina faso" : "African",
    "mali" : "Middle Eastern",
    "malawi": "African",
    "zambia" : "African",
    "somolia" : "Middle Eastern",
    "zimbabwe" : "African",
    "rwanda" : "African",
    "togo" : "African",
    "sierra leone" : "African",
    "namibia" : "African",
    "eritrea" : "African",
    "gambia" : "African",
    "gabon" : "African",
    "seychelles" : "French",
    "eswatini" : "African",
    "libya" : "African",
    "equitorial guinea" : "African",
    "cabo verde" : "Spanish",
    "capo verde" : "Cajun",
    "réunion" : "French",
    "reunion" : "French",
    "guatamala" : "Latin American",
    "nicaragua" : "Latin American",
    "panama" : "Latin American",
    "argentina" : "Latin American",
    "bolivia" : "Latin American",
    "columbia" : "Latin American",
    "guyana" : "Latin American",
    "paraguay" : "Latin American",
    "uruguay" : "Latin American",
    "venezuala" : "Latin American",
    "tunesia" : "Mediterranean",
    "cuba" : "Caribbean",
    "haiti" : "Caribbean",
    "dominican republic": "Caribbean",
    "puerto rico" : "Caribbean",
    "bangladesh" : "Asian",
    "philippines" : "Asian",
    "suriname" : "latin american",
    "turkey" : "Middle Eastern",
    "iraq" : "Middle Eastern",
    "iran" : "Middle Eastern",
    "saudi srabia" : "Middle Eastern",
    "western sahara" : "African",
    "mayotte" : "African",
    "cameroon" : "African",
    "asia" : "Asian",
    "africa" : "African",
    "latin america" : "Latin American",
    "malaysia" : "Asian",
    "myanmar" : "Asian",
    "uzbekistan" : "Middle Eastern",
    "kazakhstan" : "Middle Eastern",
    "tajikistan" : "Middle Eastern",
    "united arab emirates" : "Middle Eastern",
    "qatar" : "Middle Eastern",
    "maldives" : "asian",
    "laos" : "Asian",
    "nepal" : "Indian",
    "north korea" : "Korean",
    "south korea" : "Korean",
    "sri lanka" : "Asian",
    "syria" : "Middle Eastern",
    "cambodia" : "Asian",
    "lebanon" : "Mediterranean",
    "aruba" : "Caribbean",
    "singapore" : "Asian",
    "mongolia" : "Asian",
    "kuwait" : "Middle Eastern",
    "jordan" : "Middle Eastern",
    "armenia" : "Eastern European",
    "bahrain" : "Middle Eastern",
    "brunei" : "Middle Eastern",
    "taiwan" : "Chinese",
    "hong kong" : "Chinese",
    "macao" : "Chinese",
    "bali" : "Chinese",
    "senegal" : "African"
};

var cuisine;
var id;
//on click on recipe, go to recipe.html
$("#search").on("click", function (){
    //clear out card in case there's already something there
    $("#recipe-front").innerHTML = "";
    var searchText = $("#country").val();
    searchText = searchText.toLowerCase();
   for (const[key,value] of Object.entries(cuisines)) {
       if(searchText === key) {
           cuisine = value;
       }
   }
    getRecipeImage(cuisine);
});
//display an image on the front of the card

getRecipeImage = (cuisine) => {
    fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?&cuisine=" + cuisine, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
            "x-rapidapi-key": "79e10edf99msh072ae77a6cce95cp11389ejsn0ed4bd32fa6a"
        }
    }).then(response => {
if(response.ok) {
    response.json().then(function(data) {
        //get the number of results
        var numResults = data.results.length;
         recipeNum = Math.floor(Math.random() * numResults-1);
        //don't allow it to be negative
        if(recipeNum <0) {
            recipeNum = 0;
        }
        //choose a random recipe
        id = data.results[recipeNum].id;
        var img = data.results[recipeNum].image;
        var image = document.createElement("img");
        image.setAttribute("src", img);
        var cardFront = document.querySelector("#recipe-front");
        cardFront.appendChild(image);
       var title = data.results[recipeNum].title;
       var recipeTitle = document.createElement("p");
       recipeTitle.setAttribute("class", "recipe-card-title");
       recipeTitle.textContent = title;
       cardFront.appendChild(recipeTitle);

    })
}
});

};

//on button click, open recipe.html, and append the query info
$("#recipe-button").on("click", function(){
    window.location = "recipes.html?id=" + id;
});
//end recipe card section


//Recipe page section

var container = document.querySelector("#container");

var cuisine;
//if no id is given, we can still display a recipe
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
        var numResults = data.results.length;
        var recipeNum = Math.floor(Math.random() * numResults -1);
        id = data.results[recipeNum].id;
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
                //add in title
                var title = document.querySelector("#title");
                title.textContent += " " + data.title;
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
        var id = searchParams.get("search");
        id = id.toString();
       id = id.substring(4,id.length);
        if(!id) {
            //give them something american
            getRecipeList("American");
        }
        else {
        getRecipe(id);
        }
    };

//end of recipe section

// !!!!! MUSIC SECTION !!!!!

var playlistContainerEl = document.querySelector(".music-container");
var welcomeEl = document.querySelector("#welcome");

// Used to convert a user's search into a country code.
var countryCodesObj = {
    "BD": "Bangladesh",
    "BE": "Belgium",
    "BF": "Burkina Faso",
    "BG": "Bulgaria",
    "BA": "Bosnia and Herzegovina",
    "BB": "Barbados",
    "WF": "Wallis and Futuna",
    "BL": "Saint Barthelemy",
    "BM": "Bermuda",
    "BN": "Brunei",
    "BO": "Bolivia",
    "BH": "Bahrain",
    "BI": "Burundi",
    "BJ": "Benin",
    "BT": "Bhutan",
    "JM": "Jamaica",
    "BV": "Bouvet Island",
    "BW": "Botswana",
    "WS": "Samoa",
    "BQ": "Bonaire, Saint Eustatius and Saba ",
    "BR": "Brazil",
    "BS": "Bahamas",
    "JE": "Jersey",
    "BY": "Belarus",
    "BZ": "Belize",
    "RU": "Russia",
    "RW": "Rwanda",
    "RS": "Serbia",
    "TL": "East Timor",
    "RE": "Reunion",
    "TM": "Turkmenistan",
    "TJ": "Tajikistan",
    "RO": "Romania",
    "TK": "Tokelau",
    "GW": "Guinea-Bissau",
    "GU": "Guam",
    "GT": "Guatemala",
    "GS": "South Georgia and the South Sandwich Islands",
    "GR": "Greece",
    "GQ": "Equatorial Guinea",
    "GP": "Guadeloupe",
    "JP": "Japan",
    "GY": "Guyana",
    "GG": "Guernsey",
    "GF": "French Guiana",
    "GE": "Georgia",
    "GD": "Grenada",
    "GB": "United Kingdom",
    "GA": "Gabon",
    "SV": "El Salvador",
    "GN": "Guinea",
    "GM": "Gambia",
    "GL": "Greenland",
    "GI": "Gibraltar",
    "GH": "Ghana",
    "OM": "Oman",
    "TN": "Tunisia",
    "JO": "Jordan",
    "HR": "Croatia",
    "HT": "Haiti",
    "HU": "Hungary",
    "HK": "Hong Kong",
    "HN": "Honduras",
    "HM": "Heard Island and McDonald Islands",
    "VE": "Venezuela",
    "PR": "Puerto Rico",
    "PS": "Palestinian Territory",
    "PW": "Palau",
    "PT": "Portugal",
    "SJ": "Svalbard and Jan Mayen",
    "PY": "Paraguay",
    "IQ": "Iraq",
    "PA": "Panama",
    "PF": "French Polynesia",
    "PG": "Papua New Guinea",
    "PE": "Peru",
    "PK": "Pakistan",
    "PH": "Philippines",
    "PN": "Pitcairn",
    "PL": "Poland",
    "PM": "Saint Pierre and Miquelon",
    "ZM": "Zambia",
    "EH": "Western Sahara",
    "EE": "Estonia",
    "EG": "Egypt",
    "ZA": "South Africa",
    "EC": "Ecuador",
    "IT": "Italy",
    "VN": "Vietnam",
    "SB": "Solomon Islands",
    "ET": "Ethiopia",
    "SO": "Somalia",
    "ZW": "Zimbabwe",
    "SA": "Saudi Arabia",
    "ES": "Spain",
    "ER": "Eritrea",
    "ME": "Montenegro",
    "MD": "Moldova",
    "MG": "Madagascar",
    "MF": "Saint Martin",
    "MA": "Morocco",
    "MC": "Monaco",
    "UZ": "Uzbekistan",
    "MM": "Myanmar",
    "ML": "Mali",
    "MO": "Macao",
    "MN": "Mongolia",
    "MH": "Marshall Islands",
    "MK": "Macedonia",
    "MU": "Mauritius",
    "MT": "Malta",
    "MW": "Malawi",
    "MV": "Maldives",
    "MQ": "Martinique",
    "MP": "Northern Mariana Islands",
    "MS": "Montserrat",
    "MR": "Mauritania",
    "IM": "Isle of Man",
    "UG": "Uganda",
    "TZ": "Tanzania",
    "MY": "Malaysia",
    "MX": "Mexico",
    "IL": "Israel",
    "FR": "France",
    "IO": "British Indian Ocean Territory",
    "SH": "Saint Helena",
    "FI": "Finland",
    "FJ": "Fiji",
    "FK": "Falkland Islands",
    "FM": "Micronesia",
    "FO": "Faroe Islands",
    "NI": "Nicaragua",
    "NL": "Netherlands",
    "NO": "Norway",
    "NA": "Namibia",
    "VU": "Vanuatu",
    "NC": "New Caledonia",
    "NE": "Niger",
    "NF": "Norfolk Island",
    "NG": "Nigeria",
    "NZ": "New Zealand",
    "NP": "Nepal",
    "NR": "Nauru",
    "NU": "Niue",
    "CK": "Cook Islands",
    "XK": "Kosovo",
    "CI": "Ivory Coast",
    "CH": "Switzerland",
    "CO": "Colombia",
    "CN": "China",
    "CM": "Cameroon",
    "CL": "Chile",
    "CC": "Cocos Islands",
    "CA": "Canada",
    "CG": "Republic of the Congo",
    "CF": "Central African Republic",
    "CD": "Democratic Republic of the Congo",
    "CZ": "Czech Republic",
    "CY": "Cyprus",
    "CX": "Christmas Island",
    "CR": "Costa Rica",
    "CW": "Curacao",
    "CV": "Cape Verde",
    "CU": "Cuba",
    "SZ": "Swaziland",
    "SY": "Syria",
    "SX": "Sint Maarten",
    "KG": "Kyrgyzstan",
    "KE": "Kenya",
    "SS": "South Sudan",
    "SR": "Suriname",
    "KI": "Kiribati",
    "KH": "Cambodia",
    "KN": "Saint Kitts and Nevis",
    "KM": "Comoros",
    "ST": "Sao Tome and Principe",
    "SK": "Slovakia",
    "KR": "South Korea",
    "SI": "Slovenia",
    "KP": "North Korea",
    "KW": "Kuwait",
    "SN": "Senegal",
    "SM": "San Marino",
    "SL": "Sierra Leone",
    "SC": "Seychelles",
    "KZ": "Kazakhstan",
    "KY": "Cayman Islands",
    "SG": "Singapore",
    "SE": "Sweden",
    "SD": "Sudan",
    "DO": "Dominican Republic",
    "DM": "Dominica",
    "DJ": "Djibouti",
    "DK": "Denmark",
    "VG": "British Virgin Islands",
    "DE": "Germany",
    "YE": "Yemen",
    "DZ": "Algeria",
    "US": "United States",
    "UY": "Uruguay",
    "YT": "Mayotte",
    "UM": "United States Minor Outlying Islands",
    "LB": "Lebanon",
    "LC": "Saint Lucia",
    "LA": "Laos",
    "TV": "Tuvalu",
    "TW": "Taiwan",
    "TT": "Trinidad and Tobago",
    "TR": "Turkey",
    "LK": "Sri Lanka",
    "LI": "Liechtenstein",
    "LV": "Latvia",
    "TO": "Tonga",
    "LT": "Lithuania",
    "LU": "Luxembourg",
    "LR": "Liberia",
    "LS": "Lesotho",
    "TH": "Thailand",
    "TF": "French Southern Territories",
    "TG": "Togo",
    "TD": "Chad",
    "TC": "Turks and Caicos Islands",
    "LY": "Libya",
    "VA": "Vatican",
    "VC": "Saint Vincent and the Grenadines",
    "AE": "United Arab Emirates",
    "AD": "Andorra",
    "AG": "Antigua and Barbuda",
    "AF": "Afghanistan",
    "AI": "Anguilla",
    "VI": "U.S. Virgin Islands",
    "IS": "Iceland",
    "IR": "Iran",
    "AM": "Armenia",
    "AL": "Albania",
    "AO": "Angola",
    "AQ": "Antarctica",
    "AS": "American Samoa",
    "AR": "Argentina",
    "AU": "Australia",
    "AT": "Austria",
    "AW": "Aruba",
    "IN": "India",
    "AX": "Aland Islands",
    "AZ": "Azerbaijan",
    "IE": "Ireland",
    "ID": "Indonesia",
    "UA": "Ukraine",
    "QA": "Qatar",
    "MZ": "Mozambique"
};
// Defines an empty global variable for the Spotify access token
var token = '';

// Transforms the user's input into a country code
var getCountryCode = function(searchedCountry) {
    // Splits the country into an array based on it's white space
    var formattedCountry = searchedCountry.toLowerCase().split(" ");

    for (var i = 0; i < formattedCountry.length; i++) {
        // For each word(index), capitalize the first letter and keep the rest as lowercase
        formattedCountry[i] = formattedCountry[i].charAt(0).toUpperCase() + formattedCountry[i].substring(1);
    };

    // Joins each of the indexes together and puts whitespace between them
    formattedCountry = formattedCountry.join(" ");

    var keys = Object.keys(countryCodesObj);

    searchedCountry = searchedCountry.toUpperCase();

    if (keys.includes(searchedCountry)) {
        welcomeEl.textContent = "Here's what people in the " + searchedCountry + " are listening to now!";
        fetchPlaylist(searchedCountry, token);
    } else {
        welcomeEl.textContent = "Here's what people in " + formattedCountry + " are listening to now!";
        var countryCode = keys.find(function(key) {
            return countryCodesObj[key] === formattedCountry;
        });
        fetchPlaylist(countryCode, token);
    };
};

// !!!! MUST BE DONE BEFORE RESULTS ARE SHOWN !!!!
// Asks user to authorize this application
var spotifyUserAuthorization = function() {
    authorizeUri = 'https://accounts.spotify.com/authorize?client_id=c3f150a666754143adc77d0704da8ebf&response_type=token' +
    // !!!! THIS URI REDIRECT NEEDS TO CHANGE TO THE DEPLOYED APPLICATION !!!!
    '&redirect_uri=https://loganmerchant.github.io/password-generator/';
    location.replace(authorizeUri);
};

// Fetches the top playlists for a given country.
var fetchPlaylist = function(formattedCountry, token) {
    var searchUri = "https://api.spotify.com/v1/browse/featured-playlists?country=" + formattedCountry;
    
    fetch(searchUri, {
        // Provides the temporary authorization token in the request
        headers: {
            'Authorization': "Bearer " + token,
        }
    })
    // Formats the response in JSON
    .then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                displayPlaylist(data);
            })
        } else {
            welcomeEl.textContent = "Error: " + response.status + "! Please try again.";
            playlistContainerEl.innerHTML = "";
        };
    });
};

// Displays playlists for the searched country.
var displayPlaylist = function (data) {
    // Empties any previous search...just in case
    playlistContainerEl.innerHTML = "";
    // Creates a playlist container with various info, for the first 5 playlists returned by Spotify
    for (var i = 0; i < 9; i++) {
        var playlistEl = document.createElement("div");
        var playlistTitle = document.createElement("h2");
        var playlistSubtitle = document.createElement("h4");
        var playlistImgContainer = document.createElement("div");
        var playlistImg = document.createElement("img");
        var playlistTrackCount = document.createElement("p");
        var playlistLink = document.createElement("p");

        playlistEl.classList = "colspan-8 colspan-md-5 colspan-lg-3 " +
        "border m-3 p-3 bg-steel-hover text-center";
        playlistTitle.textContent = data.playlists.items[i].name;
        playlistSubtitle.innerHTML = data.playlists.items[i].description;
        playlistImgContainer.classList = "img-container";
        playlistImgContainer.style = "width: 300px; height: 300px; margin: auto;";
        playlistImg.setAttribute("src", data.playlists.items[i].images[0].url);
        playlistTrackCount.textContent = "Total track count: " + data.playlists.items[i].tracks.total;
        playlistLink.innerHTML = "Listen to " + data.playlists.items[i].name + 
        " on <a href=" + data.playlists.items[i].external_urls.spotify + " target='_blank'>Spotify</a>";

        playlistImgContainer.appendChild(playlistImg);
        playlistEl.appendChild(playlistImgContainer);
        playlistEl.appendChild(playlistSubtitle);
        playlistEl.appendChild(playlistTrackCount);
        playlistEl.appendChild(playlistLink);
        playlistContainerEl.appendChild(playlistEl);
    };
    console.log(data);
};

// Checks to see if user has an access token for Spotify
var tokenCheck = function() {
    searchedCountry = sessionStorage.getItem("searchTerm");
    // Pulls any token saved in sessionStorage
    var savedToken = sessionStorage.getItem("token");
    // Finds any hash fragments with in the url.
    var receivedToken = document.location.hash;

    // If there is no token in sessionStorage and there is no hash fragment with an access token...
    if (!savedToken && !receivedToken) {
        // Redirect the user to Spotify's authorization page.
        spotifyUserAuthorization();
    // If there is a hash fragment with an access token...
    } else if (receivedToken.includes("access_token=")) {
        // Isolate the access token in it's own string...
        receivedToken = receivedToken.split("=")[1].split("&")[0];
        // Set the token in sessionStorage.
        sessionStorage.setItem("token", receivedToken);
        // Set the global var of `token` to match the isolated token.
        token = receivedToken;
    } else {
        // Set the global var of `token` to match the token in sessionStorage.
        token = savedToken;
    };
    // Verifies that a token is being set for this script. 
    console.log("Token set as: " + token);
    getCountryCode(searchedCountry);
};

if (window.location.toString().includes('music.html')) {
    tokenCheck();
};

// !!!!! END OF MUSIC SECTION !!!!!

// Homepage Flag
var displayFlag = function() {
    var searchTerm = $('.search-form input').val();
    sessionStorage.setItem('searchTerm', searchTerm);
    var formattedCountry = searchTerm.toLowerCase().split(" ");

    for (var i = 0; i < formattedCountry.length; i++) {
        // For each word(index), capitalize the first letter and keep the rest as lowercase
        formattedCountry[i] = formattedCountry[i].charAt(0).toUpperCase() + formattedCountry[i].substring(1);
    };

    // Joins each of the indexes together and puts whitespace between them
    formattedCountry = formattedCountry.join(" ");

    var keys = Object.keys(countryCodesObj);

    searchTerm = searchTerm.toUpperCase();

    if (!keys.includes(searchTerm)) {
        searchTerm = keys.find(function(key) {
            return countryCodesObj[key] === formattedCountry;
        });
    };
    
    searchTerm = searchTerm.toLowerCase();
    
    var countryFlagEl = document.querySelector("#country-flag");
    var countryFlagImg = document.createElement("img");
    countryFlagImg.setAttribute("src", "https://flagcdn.com/h240/" + searchTerm + ".png");
    countryFlagEl.innerHTML = "";
    countryFlagEl.appendChild(countryFlagImg);
};

// End of Homepage Flag
