function binarySearch(Sortedarr,target){
var len=Sortedarr.length;
var low=0;
var high=len-1;
var mid;
while(low<=high){
mid=Math.floor((low+high)/2);
if(Sortedarr[mid]==target){
	return mid;
}else if(Sortedarr[mid]<target){
		low=mid+1;
}else{
	high=mid-1;
}

}
return -1;
}