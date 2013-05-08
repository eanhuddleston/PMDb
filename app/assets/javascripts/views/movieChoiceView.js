PM.Views.MovieChoiceView = Backbone.View.extend({
  events: {
    "click div.movie": "chooseMovie"
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

  chooseMovie: function () {
    var that = this;
  }
});