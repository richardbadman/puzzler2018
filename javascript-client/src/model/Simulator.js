/**
 * Puzzler 2018
 * Control your bot. Collect. Store. Win.
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Score', 'model/SimulatorBoard'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Score'), require('./SimulatorBoard'));
  } else {
    // Browser globals (root is window)
    if (!root.Puzzler2018) {
      root.Puzzler2018 = {};
    }
    root.Puzzler2018.Simulator = factory(root.Puzzler2018.ApiClient, root.Puzzler2018.Score, root.Puzzler2018.SimulatorBoard);
  }
}(this, function(ApiClient, Score, SimulatorBoard) {
  'use strict';




  /**
   * The Simulator model module.
   * @module model/Simulator
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Simulator</code>.
   * @alias module:model/Simulator
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>Simulator</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Simulator} obj Optional instance to populate.
   * @return {module:model/Simulator} The populated <code>Simulator</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('board')) {
        obj['board'] = SimulatorBoard.constructFromObject(data['board']);
      }
      if (data.hasOwnProperty('frame')) {
        obj['frame'] = ApiClient.convertToType(data['frame'], 'Number');
      }
      if (data.hasOwnProperty('maxCollectibles')) {
        obj['maxCollectibles'] = ApiClient.convertToType(data['maxCollectibles'], 'Number');
      }
      if (data.hasOwnProperty('maxFrames')) {
        obj['maxFrames'] = ApiClient.convertToType(data['maxFrames'], 'Number');
      }
      if (data.hasOwnProperty('randomSeed')) {
        obj['randomSeed'] = ApiClient.convertToType(data['randomSeed'], 'Number');
      }
      if (data.hasOwnProperty('score')) {
        obj['score'] = Score.constructFromObject(data['score']);
      }
      if (data.hasOwnProperty('simRound')) {
        obj['simRound'] = ApiClient.convertToType(data['simRound'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/SimulatorBoard} board
   */
  exports.prototype['board'] = undefined;
  /**
   * @member {Number} frame
   */
  exports.prototype['frame'] = undefined;
  /**
   * The maximum number of collectibles a bot can hold at a time.
   * @member {Number} maxCollectibles
   */
  exports.prototype['maxCollectibles'] = undefined;
  /**
   * After this many frames, the next round will automatically start.
   * @member {Number} maxFrames
   */
  exports.prototype['maxFrames'] = undefined;
  /**
   * @member {Number} randomSeed
   */
  exports.prototype['randomSeed'] = undefined;
  /**
   * @member {module:model/Score} score
   */
  exports.prototype['score'] = undefined;
  /**
   * @member {Number} simRound
   */
  exports.prototype['simRound'] = undefined;



  return exports;
}));


