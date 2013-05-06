window.PM = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function (rootEl, movies) {

    var moviesListView = new PM.Views.MoviesListView({
      collection: movies
    });

    $(rootEl).html(moviesListView.render().$el);
  }
};