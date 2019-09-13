'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var ReactPdfCommon = require("./reactPdfCommon.js");
var Core = require("@react-pdf/core");

function make(style) {
  var partial_arg = { };
  var partial_arg$1 = Core.Text;
  var func = function (param, param$1, param$2) {
    return ReactPdfCommon.make(partial_arg$1, partial_arg, param, param$1, param$2);
  };
  return (function (param) {
      return Curry._2(func, param, style);
    });
}

exports.make = make;
/* ReactPdfCommon Not a pure module */
