
    var api = `https://newsapi.org/v2/top-headlines? ${country=us}
       &apiKey=7aa4007d232b4971be8c8b229d1ca299`

    fetch(api)
    .then(function (response) {
      var data = response.json();
      return data;
      console.log(data)
    })
    .then(function (data) {
        console.log(data)
        
      })

