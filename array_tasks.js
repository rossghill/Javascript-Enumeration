const arrayTasks = {

	concat: function (arr1, arr2) {
    return arr1.concat(arr2);
	},

	insertAt: function (arr, itemToAdd, index) {
    arr.splice(index, 0, itemToAdd);
    return arr;
	},

	square: function (arr) {
    const result = arr.map(function(number){
      return number * number;
    })
    return result;
	},

	sum: function (arr) {
    total = 0;
    arr.forEach(function(number){
      total += number;
    })
    return total;
	},

	removeAndClone: function (arr, valueToRemove) {
    const result = arr.filter(function(value){
      return value !== valueToRemove;
    })
    return result;
	},

	findIndexesOf: function (arr, itemToFind) {
    let newArr = [];
    arr.filter(function(number, index){
        if (number === itemToFind) {
             newArr.push(index);
        }
    })
    return newArr;
  },

	sumOfAllEvenNumbersSquared: function (arr) {
    const evens = arr.filter(function(number){
      return number % 2 === 0;
    })
    const result = evens.reduce(function(runningTotal, number){
      return runningTotal += (number * number);
    }, 0)
    return result;
	}

	// ----------- EXTENSION ------------

	// findDuplicates: function (arr) {

	// },

}

module.exports = arrayTasks
