PM.Routers.MoviesRouter = Backbone.Router.extend({
  initialize: function ($main, movies) {
    this.$main = $main;
    // this.$infobar = $infobar;
    this.movies = movies;
  },

  routes: {
    "": "index",
    "movies/new": "new"
  },

  index: function () {
    var that = this;

    var moviesListView = new PM.Views.MoviesListView({
      collection: that.movies
    });

    that.$main.html(moviesListView.render().$el);
    $(".infobar").hide();
  },

  new: function () {
  }
});