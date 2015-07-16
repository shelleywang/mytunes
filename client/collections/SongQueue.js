// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(songs){
    this.add(songs);

    this.on('add', function(model) {
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);

    this.on('ended', function(model) {
      this.shift();
      if (this.first() !== undefined) {
        this.playFirst();
      }
    }, this);

    this.on('dequeue', function(model) {
      this.remove(model);
    }, this);

  },

  playFirst: function() {
    this.first().play();
  },


});