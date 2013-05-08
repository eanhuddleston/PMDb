PM.Routers.MoviesRouter = Backbone.Router.extend({
  initialize: function ($main, movies) {
    this.$main = $main;
    // this.$infobar = $infobar;
    this.movies = movies;
    // this.movieOptions = new PM.Collections.MovieOptions();
  },

  routes: {
    "": "index",
    "barClosed": "closeBar",
    "bar/:id": "showBar",
    "add": "add"
  },

  index: function () {
    var that = this;

    var moviesListView = new PM.Views.MoviesListView({
      collection: that.movies
    });

    that.$main.html(moviesListView.render().$el);
    $(".infobar").hide();
  },

  add: function () {
    var that = this;

    // var new_model = new PM.Models.Movie();
    var addMovieView = new PM.Views.AddMovieView({
      // model: new_model
    });

    that.$main.html(addMovieView.render().$el);
  },

  closeBar: function () {
    // Dummy function
  },

  showBar: function (id) {
    var that = this;
    console.log(id);
    var okToSlide = true;

    $('.infobar').each(function(i, obj) {
      if ($(obj).is(":visible")) {
        okToSlide = false;
      }
    });

    if(okToSlide) {
      $("#info-" + id).slideToggle();
    }

  }
});