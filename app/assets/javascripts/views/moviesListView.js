PM.Views.MoviesListView = Backbone.View.extend({
  events: {
    "click li.movie": "showMovie",
    "click ul.login_text": "loginModal"
  },

  render: function () {
    var that = this;

    var renderedContent = JST["movies/list"]({
      movies: that.collection
    });

    that.$el.html(renderedContent);
    return that;
  },

  showMovie: function (el) {
    console.log(
      "you clicked movie #" +
      $(el.target).attr("data-id") +
      "! So good a click!"
    );
  },

  loginModal: function () {
    var that = this;
    console.log("do some login junk");
  }
});