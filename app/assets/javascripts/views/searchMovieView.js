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
        that.movieOptions = new PM.Collections.MovieOptions();

        _(response.movies).each (function (movie) {
          var cast = "";
          _(movie.abridged_cast).each (function (member) {
            cast = cast + ", " + member.name;
          });
          cast = cast.substring(2,cast.length);
          var test = new PM.Models.Movie({
            title: movie.title,
            year: movie.year,
            audience_score: movie.ratings.audience_score,
            poster_url: movie.posters.detailed,
            critics_score: movie.ratings.critics_score,
            cast: cast,
            runtime: movie.runtime,
            critics_consensus: movie.critics_consensus
          });

          that.movieOptions.add(test);
        });

        var movieChoiceView = new PM.Views.MovieChoiceView({
          collection: that.movieOptions
        });

        $('.choices').remove();
        that.$el.append(movieChoiceView.render().$el);
      }
    });
  },

  process: function (data) {
    console.log("made it");
  }
});