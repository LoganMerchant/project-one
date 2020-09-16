// Creates vars for ids
var playlistContainerEl = document.querySelector("#playlist-container");
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

        playlistEl.classList = "colspan-12 colspan-md-5 colspan-lg-3 offset-lg-1 " +
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
    // Pulls any token saved in sessionStorage
    var savedToken = sessionStorage.getItem("token");
    // Finds any hash fragments with in the url.
    var receivedToken = document.location.hash;

    // If there is no token in sessionStorage and there is no hash fragment with an access token...
    if (!savedToken && !receivedToken) {
        // Redirect the user to Spotify's authorization page.
        // spotifyUserAuthorization();
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
};

tokenCheck();
getCountryCode(searchedCountry);