'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var ReactPdfCommon = require("./reactPdfCommon.js");
var Core = require("@react-pdf/core");

function make($staropt$star) {
  var style = $staropt$star !== undefined ? Caml_option.valFromOption($staropt$star) : { };
  var partial_arg = { };
  var partial_arg$1 = Core.Document;
  var func = function (param, param$1, param$2) {
    return ReactPdfCommon.make(partial_arg$1, partial_arg, param, param$1, param$2);
  };
  var arg = Caml_option.some(style);
  return (function (param) {
      return Curry._2(func, param, arg);
    });
}

exports.make = make;
/* ReactPdfCommon Not a pure module */
