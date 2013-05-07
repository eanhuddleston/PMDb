PM.Views.InfobarView = Backbone.View.extend({
  events: {
    "click .closeMe": "closeInfobar"
  },

  render: function () {
    var that = this;

    var renderedContent = JST["movies/info"]({
      movie: that.model
    });

    that.$el.html(renderedContent);
    return that;
  },

  closeInfobar: function (el) {
    barNum = $(el.target).attr("data-id").toString();
    console.log(barNum);
    $("#info-" + barNum).slideToggle();
  }
});