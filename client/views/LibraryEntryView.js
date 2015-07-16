// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',


  template: _.template('<td><img id="upvote" src="upvote.png" width="17px" height="17px"/> <%= votes %> '+
    '<img id="downvote" src="downvote.png" width="17px" height="17px"/></td>'+
    '<td class="songtext">(<%= artist %>)</td>'+
    '<td class="songtext"><%= title %></td>'+
    '<td class="songtext"><%= playcount %></td>'),

  events: {
    'click .songtext': function() {
      // this.model.play();
      this.model.enqueue();
      this.render();
    },
    'click #upvote': function() {
      this.model.upvote();
      this.render();
    },
    'click #downvote': function() {
      this.model.downvote();
      this.render();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
