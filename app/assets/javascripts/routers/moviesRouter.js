PM.Routers.MoviesRouter = Backbone.Router.extend({
  initialize: function ($main, movies) {
    this.$main = $main;
    // this.$infobar = $infobar;
    this.movies = movies;
  },

  routes: {
    "": "index",
    "barClosed": "closeBar",
    "bar/:id": "showBar",
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

  closeBar: function () {
    var that = this;
    
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

  },

  new: function () {
  }
});