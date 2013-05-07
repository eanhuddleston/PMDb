PM.Views.infobarView = Backbone.View.extend({
  events: {

  },

  render: function () {
    var that = this;

    var renderedContent = JST["movies/info"]({
      movie: that.model
    });

    that.$el.html(renderedContent);
    return that;
  },

  showMovie: function (el) {

  }
});