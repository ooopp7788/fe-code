require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/web.timers");

var _classCallCheck = require("/Users/liumengjie03/WorkSpace/repo/fe-code/node_modules/@babel/runtime/helpers/classCallCheck");

var _createClass = require("/Users/liumengjie03/WorkSpace/repo/fe-code/node_modules/@babel/runtime/helpers/createClass");

var _applyDecoratedDescriptor = require("/Users/liumengjie03/WorkSpace/repo/fe-code/node_modules/@babel/runtime/helpers/applyDecoratedDescriptor");

var _toConsumableArray = require("/Users/liumengjie03/WorkSpace/repo/fe-code/node_modules/@babel/runtime/helpers/toConsumableArray");

var _class, _class2;

function throtlle(fn, time) {
  var timer = null;
  return function () {
    var _arguments = arguments;

    if (!timer) {
      timer = setTimeout(function () {
        fn.apply(void 0, _toConsumableArray(_arguments));
        timer = null;
      }, time);
    }
  };
}

function throtlleDecorator(target, key, descriptor) {
  console.log(1, target, key, descriptor);
  var fn = descriptor.value;
  descriptor.value = throtlle(fn);
  return descriptor;
}

function classDecorator(target, key, descriptor) {
  console.log(2, target, key, descriptor);

  target.prototype.say = function () {
    console.log('say hi');
  };

  return descriptor;
}

var A = classDecorator(_class = (_class2 = /*#__PURE__*/function () {
  "use strict";

  function A() {
    _classCallCheck(this, A);
  }

  _createClass(A, [{
    key: "fn",
    value: function fn() {
      console.log('sec');
    }
  }]);

  return A;
}(), (_applyDecoratedDescriptor(_class2.prototype, "fn", [throtlleDecorator], Object.getOwnPropertyDescriptor(_class2.prototype, "fn"), _class2.prototype)), _class2)) || _class;

var inst = new A();
inst.say();
