// Assignment2 
// Yoomin Song, Pakeeza Rashid, Asad Rafique

// SOME //
Array.prototype.mySome = function (cbFunc) {
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



// FILTER // 
Array.prototype.myFilter = function(callbackFn, thisArg) {
    let array = this; 
    let resulting_array = [];

    for(let i = 0; i < array.length; i++) { // take in an array of elements 
        let callbackArg = [array[i], i, array];

        if(thisArg) { 
            if(callbackFn.call(thisArg, ...callbackArg)) { // callback function on each element 
                resulting_array.push(array[i]);
            };
        }
        else {
            if(callbackFn(...callbackArg)) {
                resulting_array.push(array[i]);
            };
        }
    }
    return resulting_array;
};