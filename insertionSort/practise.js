//bubble Sort
function BubbleSort(arr,n){
//for(var i=0;i<n;i++){
	var isSorted=false;
	var count;
	while(!isSorted){
	count=0;
	for(var j=0;j<n-1;j++){
		if(arr[j]>arr[j+1]){
		debugger;
		count++;
		swap(j,j+1,arr);
	}
	if(count==0){
		isSorted=true;
	}
	}
	}
return arr;
}
//Insertion Sort
function insertionSort(arr,n){
	var pick;
	for(var i=1;i<n;i++){
		pick=arr[i];
		j=1;
		while(arr[j-1]>pick && j>0){
			arr[j]=arr[j-1];
			j--;
		}
		arr[j]=pick;
	}
	
}
//selection Sort
function selectionSort(arr,n){
	var index;
	for(var i=0;i<n;i++){
		index=i;
		for(var j=i+1;j<n;j++){
			if(arr[j]<arr[index]){
				index=j;
			}
			if(i!==index){
				swap(i,index,arr);
			}
		}
	}
	return arr;
	
}

//mergeSort
function mergeSort(arr){
	var n=arr.length;
	if(n<2){
		return arr;
	}
	var mid=Math.floor(n/2);
	var left=arr.slice(0,mid);
	var right=arr.slice(mid);
	return merge(mergeSort(left),mergeSort(right));
	
}
function merge(leftArr,rightArr){
	var leftLen=leftArr.length;
	var rightLen=rightArr.length;
	var l=0,r=0,result=[];
	while(l<leftLen&&r<rightLen){
		if(leftArr[l]<rightArr[r]){
			result.push(leftArr[l]);
			l++
		}else{
			result.push(rightArr[r]);
			r++;
		}
	}
	return result.concat(leftArr.slice(l),rightArr.slice(r));
}


function swap(a,b,arr){
debugger;
var temp=arr[a];
arr[a]=arr[b];
arr[b]=temp;
}