PM.Views.MoviesListView = Backbone.View.extend({
  events: {
    "click li.movie": "showMovie",
    "click ul.login_text": "loginModal"
  },

  render: function () {
    var that = this;

    var renderedContent = JST["movies/index"]({
      movies: that.collection
    });

    that.collection.each(function(movie) {
      
      console.log(movie.escape("title"));
    });

    that.$el.html(renderedContent);
    return that;
  },

  showMovie: function (el) {
    $(".infobar").slideToggle();
    console.log(
      "show infobar for movie #" +
      $(el.target).attr("data-id")
    );
  },

  loginModal: function () {
    var that = this;
    console.log("do some login junk");
  }
});