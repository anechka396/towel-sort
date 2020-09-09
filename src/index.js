
// You should implement your task here.

module.exports = function towelSort (matrix) {
	var sorted = [];
	if(matrix == null || matrix.length == 0) return sorted;
	var j = 0;
	var inc = 1;
	for(var i =0; i < matrix.length; i++) {
		j = (inc > 0) ? 0 : matrix[i].length - 1;
		for(var k = 0; k < matrix[i].length; k++) {
			sorted.push(matrix[i][j]);
			j += inc;
		}
		inc *= -1;
	}
  return sorted;
}
