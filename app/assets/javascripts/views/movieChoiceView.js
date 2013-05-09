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
    that.movie = that.collection.get(cid);

    PM.Store.movieToAdd = that.movie;

    that.searchStr = that.movie.attributes.title + "+trailer+" + that.movie.escape("year");
    console.log(that.searchStr);

    $.ajax({
      type: "GET",
      url: "https://gdata.youtube.com/feeds/api/videos",
      data: {
        q: that.searchStr,
        "max-results": 5,
        v: 2,
        alt: "json"
      },
      dataType: "jsonp",
      success: function(response) {
        console.log("hello");
        window.result = response;
        that.response = response;
        // console.log(response);
        PM.Store.trailers = [];
        _(that.response.feed.entry).each (function (entry) {
          PM.Store.trailers.push("http://www.youtube.com/embed/" + entry.link[0].href.substring(32,43));
        });

        Backbone.history.navigate("#addMovie", {trigger: true});
      }    
    });
  }
});