var Class = require('klasse');

var GLContextWrapper = new Class({
    
    initialize: function GLContextWrapper(gl) {
        this.gl = gl;
    },

    addManagedObject: function(e) { },
    removeManagedObject: function(e) { },

    width: {
        get: function() {
            return this.gl.canvas.width;
        },
        set: function(width) {
            this.gl.canvas.width = width;
        }
    },

    height: {
        get: function() {
            return this.gl.canvas.height;
        },
        set: function(height) {
            this.gl.canvas.height = height;
        }
    }
});

module.exports = GLContextWrapper;