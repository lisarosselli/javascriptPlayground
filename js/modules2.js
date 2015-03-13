var Animal = (function() {
  var _id = "Animal";
  var _numOfLegs;
  var _bipedal;
  
  var setNumOfLegs = function(value) {
    _numOfLegs = parseInt(value);
    _bipedal = (_numOfLegs === 2) ? true : false;
    return _numOfLegs;
  }
  
  var getBipedal = function() {
    return _bipedal;
  }
  
  var speak = function() {
    return "";
  }
  
  return {
    // Returning a public method map
    setNumOfLegs: setNumOfLegs,
    getBipedal: getBipedal,
    speak: speak
  }
  
})();

var AnimalExt = (function(Animal) {
  Animal.addedMethod = function() {
    console.log("AnimalExt -> Animal.addedMethod");
  };
  
  return Animal;
  
})(Animal);

var Dog = (function(Animal) {
  var _id = "Dog";
  var _super = Animal;
  
  var speak = function() {
    console.log(Animal);
    return "Woof!";
  }
  
  return {
    getBipedal: _super.getBipedal,
    speak: speak
  }
})(Animal);