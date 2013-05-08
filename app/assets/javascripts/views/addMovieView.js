PM.Views.AddMovieView = Backbone.View.extend ({
  events: {
    "click button.submit": "search"
  },

  render: function () {
    var that = this;

    var renderedContent = JST["movies/add"]({
    });

    that.$el.html(renderedContent);

    return that;
  },

  search: function () {
    var that = this;

    // var url = "http://api.rottentomatoes.com/api/public/v1.0/movies.json?q=oblivion&apikey=47g5x5cc7h5mf694cygt3jgd";
    // $.getJSON(url, function(response) {
    //   console.log(response);
    // });
    
    var movie_title = $('input').val();

    $.ajax({
      type: "GET",
      url: "http://api.rottentomatoes.com/api/public/v1.0/movies",
      data: {
          q: movie_title,
          apikey: "47g5x5cc7h5mf694cygt3jgd"
      },
      dataType: "jsonp",
      success: function(response) {
        console.log(response);
        console.log(response.movies[1].title);
        window.response = response;
        var test = new PM.Models.Movie({
          title: response.movies[1].title,
          year: response.movies[1].year,
          audience_score: response.movies[1].ratings.audience_score,
          poster_url: response.movies[1].posters.detailed
        });
        
      }
    });

  }, 

  process: function (data) {
    console.log("made it");
  }
});