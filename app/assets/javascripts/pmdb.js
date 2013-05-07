window.PM = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function ($main, moviesData) {
    var movies = new PM.Collections.Movies(moviesData);

    new PM.Routers.MoviesRouter($main, movies);
    Backbone.history.start();
    // $infobar.hide();
  }
};