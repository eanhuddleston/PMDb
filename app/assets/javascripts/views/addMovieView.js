PM.Views.AddMovieView = Backbone.View.extend({
  events: {
    "click button.save": "saveMovie"
  },

  render: function () {
    var that = this;

    var renderedContent = JST["movies/add"]({
      movie: that.model
    });

    console.log($(renderedContent).find("button.save"));

    $(renderedContent).find("button.save").on("click", function() {
      var that = this;

      console.log("hello?");

      var trailer = $('input').val();
      console.log(trailer);
    });

    that.$el.html(renderedContent);
    return that;
  },

  saveMovie: function () {
    var that = this;

    var trailer = $('input').val();
    console.log(trailer);
    that.model.set("trailer", trailer);
    that.model.save();
    PM.Store.movies.add(that.model);

    Backbone.history.navigate("/", {trigger: true});
  }
});