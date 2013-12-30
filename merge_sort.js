function merge_sort(array){
	length = array.length;
	if(length<=1){
		return;
	}
	var mid = Math.ceil(length/2);
	var left = array.slice(mid, length),
		right = array.slice(0, mid);
	array = [];
	merge_sort(left);
	merge_sort(right);
	while(array.length < length){
		console.log(array);
		if (left.length != 0 && right.length != 0){
			console.log(left[0]  + ' ' + right[0])
			if (left[0] < right[0]){
				array.push(left.unshift());
			} 
			else 
			{
				array.push(right.unshift());
			}
			console.log("array is " + array);
		}
		else {
			console.log(array + left + right)
			array = array.concat(left, right);
		}
	}
	//console.log(array);
}

a = [5,4,3,5,6,3,4];
merge_sort(a);
console.log(a);