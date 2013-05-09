PM.Views.MoviesListView = Backbone.View.extend({
  events: {
    "click ul.login_text": "loginModal",
    "click button.delete": "deleteMovie"
  },

  // initialize: function () {
  //   this.listenTo(this.collection, 'remove', this.removeMovie);
  // },

  render: function () {
    var that = this;

    var renderedContent = JST["movies/index"]({
      movies: that.collection
    });

    that.$el.html(renderedContent);

    that.collection.each(function(movie) {
      var infobarView = new PM.Views.InfobarView({
        model: movie
      });

      that.$el.append(infobarView.render().$el);
    });

    return that;
  },

  deleteMovie: function (el) {
    var that = this;

    var movie_id = el.target.parentElement.getAttribute("data-id");
    that.movie = that.collection.get(movie_id);
    console.log(that.movie);
    that.collection.remove(that.movie);
    that.movie.destroy();
    $(el.target.parentElement).remove();
  }

  // removeMovie: function () {
  //   var that = this;
  //   console.log("got into removeMovie");
  // }
});