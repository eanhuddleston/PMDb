PM.Routers.MoviesRouter = Backbone.Router.extend({
  initialize: function (rootEl, movies) {
    this.$rootEl = $(rootEl);
    this.movies = movies;
  },

  routes: {
    "": "index",
    "movies/:id": "show"
  },

  index: function () {
    var that = this;

    var moviesListView = new PM.Views.MoviesListView({
      collection: that.tasks
    });

    that.$rootEl.html(moviesListView.render().$el);
  },

  show: function (id) {
    console.log("m just getting warmed up!");
  }
});