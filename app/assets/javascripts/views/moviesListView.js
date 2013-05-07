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
      var infobarView = new PM.Views.InfobarView({
        model: movie
      });

      that.$el.append(infobarView.render().$el);
    });

    return that;
  },

  showInfobar: function (el) {
    var okToSlide = true;

    $('.infobar').each(function(i, obj) {
      if ($(obj).is(":visible")) {
        okToSlide = false;
      }
    });

    if(okToSlide) {
      var movieIdStr = $(el.target).attr("data-id").toString();
      $("#info-" + movieIdStr).slideToggle();
    }
  },

  loginModal: function () {
    var that = this;
    console.log("do some login junk");
  }
});