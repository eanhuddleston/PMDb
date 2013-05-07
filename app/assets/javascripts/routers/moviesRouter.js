PM.Routers.MoviesRouter = Backbone.Router.extend({
  initialize: function ($main, $infobar, movies) {
    this.$main = $main;
    this.$infobar = $infobar;
    this.movies = movies;
  },

  routes: {
    "": "index",
    "movies/:id": "show"
  },

  index: function () {
    var that = this;

    var moviesListView = new PM.Views.MoviesListView({
      collection: that.movies
    });

    that.$main.html(moviesListView.render().$el);
  },

  show: function (id) {
    console.log("I'm just getting warmed up!");
  }
});