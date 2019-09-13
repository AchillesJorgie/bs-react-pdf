'use strict';

var Core = require("@react-pdf/core");

function create(prim) {
  return Core.StyleSheet.create(prim);
}

exports.create = create;
/* @react-pdf/core Not a pure module */
