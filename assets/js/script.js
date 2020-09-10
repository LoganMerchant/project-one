searchTerm = "AFI"
searchType = "artist"

var spotifyUserAuthorization = function() {
    authorizeUri = 'https://accounts.spotify.com/authorize?client_id=c3f150a666754143adc77d0704da8ebf&response_type=token&redirect_uri=https://loganmerchant.github.io/password-generator/';

    location.replace(authorizeUri);
};

var fetchData = function() {
    var token = document.location.hash.split("=")[1].split("&")[0];
    var searchUri = "https://api.spotify.com/v1/search?q=" + "afi" + "&type=" + "artist";
    
    fetch(searchUri, {
        headers: {
            'Authorization': "Bearer " + token,
        }
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    })
};
