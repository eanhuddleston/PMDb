PM.Views.MoviesListView = Backbone.View.extend({
  events: {
    "click li.movie": "showInfobar",
    "click ul.login_text": "loginModal"
  },

  render: function () {
    var that = this;

    var renderedContent = JST["movies/index"]({
      movies: that.collection
    });

    that.$el.html(renderedContent);

    that.collection.each(function(movie) {
      var renderedContent = JST["movies/info"]({
        movie: movie
      });

      that.$el.append(renderedContent);
    });

    return that;
  },

  showInfobar: function (el) {
    var movieIdStr = $(el.target).attr("data-id").toString();
    $("#info-" + movieIdStr).slideToggle();
  },

  loginModal: function () {
    var that = this;
    console.log("do some login junk");
  }
});