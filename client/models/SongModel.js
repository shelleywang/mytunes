// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  initialize: function(params){
    this.set('playcount',0);
    this.set('votes',0);
  },

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('enqueue', this);
    this.set('playcount', this.get('playcount') + 1);
  },

  dequeue: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('dequeue', this);
  },

  ended: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('ended', this);
  },

  upvote: function() {
    this.set('votes', this.get('votes') + 1);
  },

  downvote: function() {
    this.set('votes', this.get('votes') - 1);
  }

});
