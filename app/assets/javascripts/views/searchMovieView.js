PM.Views.SearchMovieView = Backbone.View.extend ({
  events: {
    "click button.submit": "search"
  },

  render: function () {
    var that = this;

    var renderedContent = JST["movies/search"]({
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
        // console.log(response.movies[1].title);
        window.response = response;

        that.movieOptions = new PM.Collections.MovieOptions();
        window.coll = that.movieOptions;

        _(response.movies).each (function (movie) {
          var test = new PM.Models.Movie({
            title: movie.title,
            year: movie.year,
            audience_score: movie.ratings.audience_score,
            poster_url: movie.posters.detailed
          });

          that.movieOptions.add(test);
        });

        var movieChoiceView = new PM.Views.MovieChoiceView({
          collection: that.movieOptions
        });

        $('.choices').remove();
        that.$el.append(movieChoiceView.render().$el);

        console.log(JSON.stringify(that.movieOptions));
      }
    });
  }, 

  process: function (data) {
    console.log("made it");
  }
});