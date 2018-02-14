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

	// findIndexesOf: function (arr, itemToFind) {

	// },

	// sumOfAllEvenNumbersSquared: function (arr) {

	// }

	// ----------- EXTENSION ------------

	// findDuplicates: function (arr) {

	// },

}

module.exports = arrayTasks
