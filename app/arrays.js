exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
   for (var i  = 0; i < arr.length; i++) {
     if (arr[i] === item) {
       return i;
     }
   }

   return -1;
  },  

  sum: function(arr) {
    let sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }

    return sum;
  },

  remove: function(arr, item) {
   return arr.filter(e => e !== item);
  },

  removeWithoutCopy: function(arr, item) {
   for (var i = 0; i < arr.length; i++) {
     if (arr[i] === item) {
       arr.splice(i, 1);
       i--;
     }
   }

   return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.splice(0, 0, item);
    return arr;
  },

  curtail: function(arr) {
    arr.splice(0,1);
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    let count = 0;

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        count++;
      }
    }

    return count;
  },

  duplicates: function(arr) {
    let result = [];

    let map = new Object();
    for (var i = 0; i < arr.length; i++) {
      if (map[arr[i]]) {
        if (result.indexOf(arr[i]) === -1) {
          result.push(arr[i]);
        }
      } else {
        map[arr[i]] = arr[i];
      }
    }

    return result;
  },

  square: function(arr) {
    const map = arr.map(x => x * x);
    return map;
  },

  findAllOccurrences: function(arr, target) {
    let result = [];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] ===  target) {
        result.push(i);
      }
    }

    return result;
  }
};
