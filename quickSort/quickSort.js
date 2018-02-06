function quickSort(arr){
var n=arr.length;
var newArr=[];
if(n<2){
	return arr;
}
var pivot=arr[n-1];
var left=[],right=[];
for(var i=0;i<n-1;i++){
	if(pivot<=arr[i]){
		right.push(arr[i]);
	}else{
		left.push(arr[i]);
	}
}
newArr= newArr.concat(quickSort(left),pivot,quickSort(right));
return newArr;

}