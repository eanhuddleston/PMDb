PM.Views.AddMovieView = Backbone.View.extend ({
  events: {
    "click button.submit": "search"
  },

  render: function () {
    var that = this;

    var renderedContent = JST["movies/add"]({
    });

    that.$el.html(renderedContent);

    return that;
  },

  search: function () {
    var that = this;
    console.log("hello!");

    // var url = "http://api.rottentomatoes.com/api/public/v1.0/movies.json?q=oblivion&apikey=47g5x5cc7h5mf694cygt3jgd";
    // $.get(url, function(response) {
    //   console.log(response);
    // });
    
    $.ajax({
      type: "GET",
      url: "http://api.rottentomatoes.com/api/public/v1.0/movies.json",
      contentType: "application/json",
      data: JSON.stringify({
          q: "Oblivion",
          apikey: "47g5x5cc7h5mf694cygt3jgd"
      }),
      dataType: "json",
      success: function(response) {
        // Put the plain text in the PRE tag.
        console.log(response);
      }
    });

  }, 

  process: function (data) {

  }
});