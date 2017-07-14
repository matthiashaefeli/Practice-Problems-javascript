function makeArrayConsecutive2(array) {
	var result = 0;
	var first = array.sort()[0];
	var last = array.sort().slice(-1);
	for(var index = first; index < last; index++) {
		if (array.includes(index) === false) {
			result += 1
		}
	}
	return result
}