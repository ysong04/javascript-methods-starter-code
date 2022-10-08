/*----------------------------------------------------------
JavaScript Prototype: Method
Every object in JavaScript has a built-in property called "prototype." 
The prototype constructor is used to add new methods (functions) and properties to a JavaScript object. 
- If a method is constructed, then it will be available for the object. 
- If a property is constructed, then the object will be given the property and its value, as default.

In this Assignment, we use the prototype constructor to add new methods to the Array() object.
----------------------------------------------------------*/
/*----------------------------------------------------------
Yoomin Song, Pakeeza Rashid, Asad Rafique
----------------------------------------------------------*/

// MAP //
Array.prototype.myMap = function(callbackFn) {
  // Place your code here.
};

// FILTER //
Array.prototype.myFilter = function(callbackFn) {
  let result = [];

  for (let i = 0  ; i < this.length ; i++){
    if (this[i] === undefined)
    {
      continue;    // If an element in the array is undefined, skip it
    }

    if( cbFunc(this[i], i, this))
    {
        push(result, this[i]);
        // We use the push method here instead of saving the value at the same Index
        // it was placed in the input array so that there are no empty slots in the result array
    }
  }
  return result;// Place your code here.
};

// SOME //
Array.prototype.mySome = function(callbackFn) {
  if (this.length === 0)
  {
    return false;        // If array is empty, return false
  }
  // Otherwise
  for (let i = 0; i < this.length; i++) {     // Pass through the array
      if (this[i] === undefined)
      {
        continue;    // If an element in the array is undefined, skip it
      }

      if (cbFunc(this[i], i, this) === true)
      {
         return true;     // If a 'truthy' value is encountered, return true
       }
  }

  return false;       // If no 'truthy' value is found, return false
};

// EVERY //
Array.prototype.myEvery = function(callbackFn) {
  // Place your code here.
};

// REDUCE //
Array.prototype.myReduce = function(callbackFn) {
  // Place your code here.
};

// INCLUDES //
Array.prototype.myIncludes = function(searchElement) {
  // Place your code here.
};

// INDEXOF //
Array.prototype.myIndexOf = function(searchElement) {
  // Place your code here.
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement) {
  // Place your code here.
};

// KEYS //
Object.myKeys = function(object) {
  // Place your code here.
};

// VALUES //
Object.myValues = function(object) {
  // Place your code here.
};