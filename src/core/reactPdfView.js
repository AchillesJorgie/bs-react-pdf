'use strict';

var Caml_option = require("bs-platform/lib/js/caml_option.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Core = require("@react-pdf/core");

function make($staropt$star, children) {
  var style = $staropt$star !== undefined ? Caml_option.valFromOption($staropt$star) : { };
  return ReasonReact.wrapJsForReason(Core.View, {
              style: style
            }, children);
}

exports.make = make;
/* ReasonReact Not a pure module */
