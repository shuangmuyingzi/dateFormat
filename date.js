/*
 * Date Format 1.0.0
 * MIT license
 */

(function(global) {
  'use strict';

  var datechange = (function() {
      
      return function (date) {
  
        date = date || new Date;
  
        if(!(date instanceof Date)) {
          date = new Date(date);
        }
  
        if (isNaN(date)) {
          throw TypeError('Invalid date');
        }
        let re = date.getFullYear() + '.' + (date.getMonth()+1) + '.' + date.getDate();
        return re
  
      }
  })()

  if (typeof define === 'function' && define.amd) {
    define(function () {
      return datechange;
    });
  } else if (typeof exports === 'object') {
    module.exports = datechange;
  } else {
    global.datechange = datechange;
  }

})(this);