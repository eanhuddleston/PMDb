PM.Routers.MoviesRouter = Backbone.Router.extend({
  initialize: function ($main, movies) {
    this.$main = $main;
    this.movies = movies;
  },

  routes: {
    "": "index",
    "barClosed": "closeBar",
    "bar/:id": "showBar",
    "add": "add",
    "addMovie": "addMovie"
  },

  index: function () {
    var that = this;

    var moviesListView = new PM.Views.MoviesListView({
      collection: PM.Store.movies
    });

    that.$main.html(moviesListView.render().$el);
    $(".infobar").hide();
  },

  add: function () {
    var that = this;

    var searchMovieView = new PM.Views.SearchMovieView({
    });

    that.$main.html(searchMovieView.render().$el);
  },

  addMovie: function () {
    var that = this;
    console.log("got to addMovie in router");

    var addMovieView = new PM.Views.AddMovieView({
      model: PM.Store.movieToAdd
    });
    // this.swap(addMovieView);
    that.$main.html(addMovieView.render().$el);
  },

  // swap: function (newView) {
  //   this.currentView.remove();
  //   this.currentView = newView;
  //   this.$main.html(newView.render().$el);
  // },

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