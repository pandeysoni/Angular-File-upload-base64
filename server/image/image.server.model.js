/**
 * Module dependencies.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ImageSchema = new Schema({
  image: { type: String },
 
});


ImageSchema.statics = {

  /**
   * get
   *
   * @param {Object} options
   * @param {Function} cb
   * @api private
   */
    getAll: function(callback) {
        this.find({}, callback);
    },
    /**
     * create
     *
     * @param {Object} options
     * @param {Function} cb
     * @api private
     */
    create: function(data, callback) {
        var image = new this(data);
        image.save(callback);
    }
}

var image = mongoose.model('Image', ImageSchema);

/** export schema */
module.exports = {
    Image: image
};