
// You should implement your task here.

module.exports = function towelSort (matrix) {
	if (matrix === undefined)
		return [];
	let result = [];
	for (let i = 0; i < matrix.length; i ++) {
		if (i % 2 != 0)
			Array.prototype.push.apply(result, matrix[i].reverse());
		else
			Array.prototype.push.apply(result, matrix[i].slice());		
	}
	return result;
}
