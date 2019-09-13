'use strict';

var ReactPdfCommon = require("./reactPdfCommon.js");
var Core = require("@react-pdf/core");

function make(src) {
  var partial_arg = {
    src: src
  };
  var partial_arg$1 = Core.Link;
  return (function (param, param$1, param$2) {
      return ReactPdfCommon.make(partial_arg$1, partial_arg, param, param$1, param$2);
    });
}

exports.make = make;
/* ReactPdfCommon Not a pure module */
