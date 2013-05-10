PM.Views.AddMovieView = Backbone.View.extend({
  events: {
    "click button.save": "saveMovie"
  },

  render: function () {
    var that = this;

    var renderedContent = JST["movies/add"]({
      movie: that.model,
      trailers: PM.Store.trailers
    });

    console.log($(renderedContent).find("button.save"));

    $(renderedContent).find("button.save").on("click", function() {
      var that = this;

      var trailer = $('input').val();
    });

    that.$el.html(renderedContent);
    return that;
  },

  saveMovie: function (el) {
    var that = this;

    var movieLocation = $('input').val();
    that.model.set("location", movieLocation);

    var trailerNum = el.target.parentElement.getAttribute("data-trailer");
    var trailer = PM.Store.trailers[trailerNum];
    console.log(trailer);

    that.model.set("trailer", trailer);
    that.model.save();
    that.model.fetch({
      success: function(model) {
        console.log(model);
        PM.Store.movies.add(model);
        Backbone.history.navigate("/", {trigger: true});
      }
    });
  }
});