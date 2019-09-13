'use strict';

var ReactPdfCommon = require("./reactPdfCommon.js");
var Core = require("@react-pdf/core");

function make($staropt$star, $staropt$star$1) {
  var size = $staropt$star !== undefined ? $staropt$star : "A4";
  var orientation = $staropt$star$1 !== undefined ? $staropt$star$1 : "portrait";
  var partial_arg = {
    size: size,
    orientation: orientation
  };
  var partial_arg$1 = Core.Page;
  return (function (param, param$1, param$2) {
      return ReactPdfCommon.make(partial_arg$1, partial_arg, param, param$1, param$2);
    });
}

exports.make = make;
/* ReactPdfCommon Not a pure module */
