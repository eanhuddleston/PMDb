PM.Views.MovieChoiceView = Backbone.View.extend({
  events: {
    "click img.poster": "chooseMovie"
  },

  render: function () {
    var that = this;

    var renderedContent = JST["movies/choose"]({
      movies: that.collection
    });

    that.$el.addClass( "choices" );
    that.$el.html(renderedContent);

    return that;
  },

  chooseMovie: function (el) {
    var that = this;

    console.log($(el.target).attr('data-cid'));
    var cid = $(el.target).attr('data-cid');
    var movie = that.collection.get(cid);

    PM.Store.movieToAdd = movie;

    Backbone.history.navigate("#addMovie", {trigger: true});
  }
});