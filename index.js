'use strict';

// YOU KNOW WHAT TO DO //

/**
 * identity: Designed to return any given value unchanged.
 * 
 * 
 * @param {Any value} value: Given value.
 * @return {Any value} value: Returns value unchanged.
 * 
 */
function identity(value) {
    return value;
}
module.exports.identity = identity;



/**
 * typeOf: Designed to return the given datatype of its operand in a form of a string.
 * 
 *
 * @param {Any value} value: Given value.
 * @return {Any value} value: Returns a string. 
 */
function typeOf(value) {
    if (Array.isArray(value)) {
        return 'array';
    } else if (value === null) {
        return 'null';
    } else {
        return typeof(value);
    }
}
module.exports.typeOf = typeOf;


/**
 * first: Designed to loop over the array and return the first given numbers of elements. 
 * 
 * 
 * @param {Array or Object} array: The array over which to iterate.
 * @param {Number} number: The given number of elements to return from array.
 * @return {Array}: An array containing the first number of elements from the given array. 
 */
 
function first(array, number) {
// make new container for first number items of array
    let result = [];
// EdgeCase2: if number is greater than array, return the whole array
    if (number > array.length) {
        return array;
    }
// Objective1: if array isn't array return empty array
    if (typeOf(array) !== 'array' || number < 0) {
        return [];
// Objective2: if number isn't a number return first element in array
    } else if (!number) {
        return array[0];
// Objective3: return first number of items in array
    } else {
        for (let i = 0; i < number; i++) {
            result.push(array[i]);
        }
    }
    return result;
    
}
module.exports.first = first;


/**
 * last: Designed to loop over an array and return the last elements in the array.
 * 
 * @param {Array or Object} array: The array over which to iterate.
 * @param {Number} number: The given number of elements to return from array.
 * @return {Array}: Returns the last element from the given array.
 */
function last (array, number) {
// make new container for last number items of array
    let result = [];
// EdgeCase2: if number is greater than array, return the whole array
    if (number > array.length) {
        return array;
    }
// Objective1: if array isn't array return array literal
    if (typeOf(array) !== 'array') {
        return [];
// Objective2: if number isn't a number return last element in array
    } else if (!number) {
        return array[array.length - 1];
// Objective3: return last number of items in array
    } else {
        for (let i = array.length - number; i < array.length; i++) {
            result.push(array[i]);
        }
    }
    return result;
}
module.exports.last = last;


/**
 * indexOf: Designed to loop over an array and return the index of the first occurrance value.
 *          If the value isn't found in the array, then the function will return -1
 * 
 * @param {Array or Object} array: The array over which to iterate.
 * @param {Any} value: The given value to check occurrance in the array.
 * @return {Number}: A number representing the index of the first occurrance of the given value.
 */
function indexOf (array, value) {
// Objective1: loop over array
    for (let i = 0; i < array.length; i++) {
// Objective1: check if value in array
        if (array[i] === value) {
// Objective1: return index of array
            return i;
        }
    }
// Objective2: return -1 if value isn't in array
    return -1;
}
module.exports.indexOf = indexOf;


/**
 * contains: Designed to check if a specified value is in the list.
 *           Returns true if the value is present in the list. 
 * 
 * @param {Array or Object} array: The array in which to check the value from. 
 * @param {Any} value: value: The given value in which to check for. 
 * @return {Boolean}: True if value is present. False if value is not present.  
 */
 
function contains (array, value) {
// Objective1: if array contains value return true
    return indexOf(array, value) >= 0 ? true : false;
}
module.exports.contains = contains;


/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;


/**
 * unique: Designed to loop over an array and return a new array that does not contain duplicated elements. 
 * 
 * @param {Array} array: The array over which to iterate.
 * @return {Array}: Returns an array of non duplicated elements. 
 */
function unique(array) {
// using filter to access the array element and the array index and filter each item
// using indexOf to check if element(1) is equal to index(0)
return array.filter((element, index) => array.indexOf(element) === index);

    // let result = [];
    // for (let element of array) {
    //     if (_.indexOf(result, element) === -1){
    //         result.push(element);
    //     }
    // }
    // return result;
    
}
module.exports.unique = unique;


/**
 * filter: Designed to loop over an array and return a new array with elements that pass the (func) test. 
 *         
 * 
 * @param {Array or Object} array: The array over which to iterate.
 * @param {Function} func: The function in which to be applied to each value in the array. Returns a boolean.
 * @return {Array}: An array containing the values that pass the (func) test.
 */
function filter(array, func) {
// create empty array to save elements
    let result = []
// looping over the array
    for (let i = 0; i < array.length; i++) 
// Objective1: check if current element passes the test then call func(e, i, a) 
    if (func(array[i], i, array)) {
// if element passes test, push into empty array
        result.push(array[i]);
    }
// Objective2: return new array of elements that passed the test
    return result;
}
module.exports.filter = filter;


/**
 * reject: Designed to loop over an array and return a new array with elements that did not pass the (func) test.
 * 
 * @param {Array or Object} array: The array over which to iterate.
 * @param {Function} func: The function in which to be applied to each value in the array. Returns a boolean.
 * @return {Array} array: An array containing the values that did not pass the (func) test. 
 */
function reject (array, func) {
   return filter(array, function(element, index, array) {
    return !func(element, index, array); 
    })
}
module.exports.reject = reject;


/**
 * partition: Designed to loop over an array and return a new array containing two new arrays. 
 *            One array with elements that passed the (func) test.
 *            Another array with elements that did not pass the (func) test.
 * 
 * @param {Array or Object} array: The array over which to iterate.
 * @param {Function} func: The function in which to be applied to each value in the array.
 * @return {Array}: An array containing two arrays. One that pass the test and another that did not pass the test. 
 */
function partition(array, func) {
// creating array to save 2 sub arrays
    let result = [];
// creating array for truthy elements
    let truthyArr = [];
// creating array for falsy elements
    let falsyArr = [];
// looping array
    for (let i = 0; i < array.length; i++)
// Objective1: checking if elements passes test. call func(e, i, a)
    if (func(array[i], i, array)) {
// Objective2: if elements passes test, push elements into truthy array
        truthyArr.push(array[i]);
// Objective2: if elements don't pass test, push elements into falsy array
    } else {
        falsyArr.push(array[i]);
    }
// pushing sub arrays into the result array
    result.push(truthyArr, falsyArr)
// return result array containing sub arrays
    return result
 }
module.exports.partition = partition;


/**
 * map: Designed to loop over an array and does some operation to every element in the given array.
 * 
 * @param {Array or Object} collection: The array over which to iterate.
 * @param {Function} func: The function in which to be applied to each value in the array.
 * @return {Array}: An array containing the elements which were operated on.
 */
function map(collection, func) {
// empty array to save value
    let result = [];
// Objective1: check if collection is an array
    if (Array.isArray(collection)) {
// Objective1: loop over array for access
        for (let i = 0; i < collection.length; i++)
// Objective2: save value of func call
        result.push(func(collection[i], i, collection))
// Objective1: check if collection is object
    } else if (typeof collection === 'object') {
// Objective1: access object key/values
        for (let key in collection)
// Objective2: save value of func call
        result.push(func(collection[key], key, collection))
    }
    return result;
}
module.exports.map = map;  

    
/**
 * pluck: Designed to take each object extract values from the given propety and put the extracted values in a new array.
 * 
 * @param {Array or Object} array: The array over which to iterate.
 * @param {Property} property: The property to extract from. 
 * @return {Array}: An array containing the extracted values from the given property.
 */
function pluck(array, property) {
    return map(array, function(object, index, arr) {
        return object[property];
    })
}
module.exports.pluck = pluck;


/**
 * every: Designed to loop over an array and checks if each element in the given array satisfies the condition.
 * 
 * @param {Array or Object} collection: The array over which to iterate.
 * @param {Function} func: The function in which to be applied to each value in the array.
 * @return {Boolean}: True if all elements satisfy the condition. False if one of the elements fail.  
 */
function every(collection, func) {
    if (func === undefined) {
        let result = true;
    each(collection, function(element, index, array) {
        if (!element) {
            result = false;
        }
    })
    return result;
    }
    
    if (reject(collection, func).length > 0) {
        return false;
    } 
    return true;
}
module.exports.every = every;


/**
 * some: Designed to loop over an array and checks the elements in the given array that satisfies the condition.
 * 
 * @param {Array or Object} collection: The array over which to iterate.
 * @param {Function} func: The function in which to be applied to each value in the array. 
 * @return {Boolean}: True if at least one element in the array satisfies the condition. False is non satisfies the condition.
 */
function some(collection, func) {
      if (func === undefined) {
      let result = false;
      each (collection, function(element, index, array) {
          if (element) {
              result = true;
          }
      })
      return result;
  }
  if (reject(collection, func).length === collection.length) {
      return false;
  } else {
      return true;
  }
}
module.exports.some = some;


/**
 * reduce: Designed to loop over an array and takes the array and reduce the array into a single value. 
 *         Executes a given function for each value of the array.
 * 
 * @param {Array or Object} array: The array over which to iterate.
 * @param {Function} func: The function in which to be applied to each value in the array.
 * @param {Seed} seed: The container in which to seed the value. 
 * @return {Value}: A single value.
 */
function reduce(array, func, seed) {
    if (seed === undefined) {
        seed = array[0]
        let arr = array.slice(1);
        each(arr, function(element, index) {
            seed = func(seed, element, index + 1)
        })
    } else {
        each(array, function(element, index) {
            seed = func(seed, element, index);
        })
    }
    return seed;

}
module.exports.reduce = reduce;


/**
 * extend: Designed to copy all the properties from an object over to a chosen object.
 * 
 * @param {Object} object1: The chosen object in which to store the copied properties in. 
 * @param {Object} objects: The array of objects in which to copy the properties from.
 * @return {Object}: An object of shallowly copied properties. 
 */
function extend(object1, ...objects) {
    each(objects, function(obj, index, array) {
        each(obj, function(value, key, object) {
            object1[key] = value;
        })
    })
    return object1;
}
module.exports.extend = extend;
    
