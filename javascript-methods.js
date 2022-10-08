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
Array.prototype.myMap = function (cbFunc) {
    let final = [];                               // Creating an new array to return at the end

    for (let i = 0; i < this.length; i++) {     // Passes through all of the array
        if (this[i] === undefined)
        {
          continue;    // If an element in the array is undefined, skip it
        }
        final[i] = cbFunc(this[i], i, this);      // Execute the callback function for each element in array
    }
    return final;     // Return resulting array
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
  return result;
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

    for (let i = 0  ; i < this.length ; i++){
      if (this[i] === undefined)
      {
        continue;    // If an element in the array is undefined, skip it
      }

      if( !cbFunc(this[i], i, this))
      {
        return false;
      }
    }

    return true;
};

// REDUCE //
Array.prototype.myReduce = function (cbFunc, startingvalue) {
    if (this.length === 0 && !startingvalue) {     // If the array is empty & no starting value is supplied,
        throw new TypeError();                  // throw a TypeError
    }

    let accumulator = (initialVal !== undefined) ? startingvalue : undefined;      // If startingvalue is supplied, accumulator = startingvalue
                                                                        // Otherwise, accumulator = undefined
    for (let i = 0; i < this.length; i++) {         // Iterate through entire array once
        if (this[i] === undefined) continue;        // If an element in the array is undefined, skip it

        if (accumulator !== undefined) {
            accumulator = cbFunc(acc, this[i], i, this);    // If accumulator already has a value, execute callback function
        } else {
            accumulator = this[i]                           // If accumulator is undefined, assign to it the value
        }                                           // found at the current index of the array
    }

    return accumulator;         // Return accumulator results
};


// INCLUDES //
Array.prototype.myIncludes = function(searchElement) {
    if (Index < this.length) { // Checks if Index < this.length. the length of the array.
        for (let i = 0; i < this.length; i++) { // Iterates through the array.
            if (this[i] === searchElement) {
                return true; // Returns true if item is in the array.
            }
        }
        return false; // Returns false is item is not in the array.
    }
    else {
        return false; // Returns false if Index >= this.length.
    }
};

// INDEXOF //
Array.prototype.myIndexOf = function(searchElement) {
    if (Indexof < this.length) { // Checks if Indexof is less than the size of the array
        for (let i = Indexof; i < this.length; i++) { // Iterates through the array.
            if (this[i] === searchElement) {
                return i; // Returns the first index of the element in the array.
            }
        }
        return -1; // Returns -1 if the element is not found.
    }
    else {
        return -1; // Returns -1 if fromIndex is greater than or equal to the array size.
    }
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement) {
  if (fromIndex >= this.length) {
    for (let i = fromIndex; i > -1; i-=1) {  // iterating backword, beggining at index 'fromIndex'
      if (this[i] === searchElement) {
        return i; // value found
      }
    }
  }

  return -1; // if value not found, return -1
};

// KEYS //
Object.myKeys = function(object) {
    var keys = [];   //create an empty array
    for(const property in obj){ //iterates through property in given obj
      keys.push(property); // pushes property name in new
    }
    return keys;
};

/* The Object.values() method returns an array of a given object's
own enumerable property values, in the same order as that provided
by a for...in loop. */

Object.myValues = function(object) {
    var valueArray = [];         //Create an empty array
    const keysArray = Object.myKeys(object);
    //We want to use for..of because the indices are already enumerated
    for (const keys in keysArray){ //Iterates through all keys in given keysArray
      valueArray.push(object[keys]); //Pushes key values in new array
    }
    return valueArray;
};
