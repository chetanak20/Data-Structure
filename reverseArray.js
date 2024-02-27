// Revert an array

var arr = [2,8,5,7,1];
function reverseArr (arr) {
  var l = arr.length-1;
    for (var i = 0; i<=l; i++){
        var temp = arr[i];
        arr[i] = arr[l];
        arr[l] = temp;
        l--;
    }
    return arr;
}

console.log(reverseArr(arr));
