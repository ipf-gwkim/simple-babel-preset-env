"use strict";

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

var a = 'babel';

function get() {
  return new Promise(function (resolve, reject) {
    resolve('data');
  });
}

get().then(function (data) {
  return console.log('data:', data);
});