"use strict";

var _aphrodite = require("aphrodite");

exports.onClientEntry = function () {
  if (window.gatsbyAphrodite) {
    _aphrodite.StyleSheet.rehydrate(window.gatsbyAphrodite);
  }
};