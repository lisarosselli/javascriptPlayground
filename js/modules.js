(function () {
  console.log("hello world");
  // an immediately-invoked-function-expression
})();

//http://toddmotto.com/mastering-the-module-pattern/

var Module = (function() {
  
  var privateMethod1 = function() {
    console.log("privateMethod1");
  };
  
  return {
    publicMethod: function() {
      console.log("publicMethod");
      privateMethod1();
    }
  };
  
})();

var Module2 = (function() {
  var obj = {};
  
  var privateMethod = function() {
    
  };
  
  obj.someMethod = function() {
    console.log("someMethod is public");
  }
  
  return obj;
})();

var Module3 = (function() {
  var privateValue1 = "privateValue1 here!";
  
  var privateMethod = function() {
    //private
  };
  
  var publicMethod = function() {
    //public
    console.log(privateValue1);
    // returning this object will allow for cascade
    return this;
  };
  
  var anotherMethod = function() {
    console.log("anotherMethod-publicMethod2");
    // returning this object will allow for cascade
    return this;
  };
  
  return {
    publicMethod1: publicMethod,
    publicMethod2: anotherMethod
  }
})();

// extending a module
var ModuleExt = (function(Module3) {
  Module3.extension = function() {
    console.log("extension function");
  };
  
  return Module3;
})(Module3);