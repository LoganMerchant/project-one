function getNews(){
    var api = `http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=7aa4007d232b4971be8c8b229d1ca299`

    fetch(api)
    .then(function (response) {
      var data = response.json();
      return data;
      console.log(data)
    })
    .then(function (data) {
        console.log(data)
        for (var i = 0; i < data.list.length; i ++) {
          //make temp show
         
        }
      })

}