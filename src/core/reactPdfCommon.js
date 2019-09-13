'use strict';

var Caml_option = require("bs-platform/lib/js/caml_option.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Js_null_undefined = require("bs-platform/lib/js/js_null_undefined.js");

function make(reactClass, props, key, $staropt$star, children) {
  var style = $staropt$star !== undefined ? Caml_option.valFromOption($staropt$star) : { };
  return ReasonReact.wrapJsForReason(reactClass, Object.assign(props, {
                  key: Js_null_undefined.fromOption(key),
                  style: style
                }), children);
}

exports.make = make;
/* ReasonReact Not a pure module */
