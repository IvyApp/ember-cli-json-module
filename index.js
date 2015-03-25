/* jshint node: true */
'use strict';

var jsonModule = require('broccoli-json-module');

module.exports = {
  name: 'ember-cli-json-module',

  treeForApp: function() {
    return jsonModule(this.app.trees.app);
  },

  treeForTestSupport: function() {
    return jsonModule(this.app.trees.tests);
  }
};
