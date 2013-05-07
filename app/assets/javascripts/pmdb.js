window.PM = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function ($main, $infobar, moviesData) {
    var movies = new PM.Collections.Movies(moviesData);

    new PM.Routers.MoviesRouter($main, $infobar, movies);
    Backbone.history.start();
  }
};