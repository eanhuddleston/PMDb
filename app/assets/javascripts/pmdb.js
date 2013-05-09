window.PM = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Store: {},

  initialize: function ($main, moviesData) {
    PM.Store.movies = new PM.Collections.Movies(moviesData);

    new PM.Routers.MoviesRouter($main);
    Backbone.history.start();
    // $infobar.hide();
  }
};