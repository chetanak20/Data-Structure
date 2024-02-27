function searchItem(list = [], number) {
    var result = "Number not in list!";
    for (var i = 0; i<= list.length; i++) {
        if (list[i] === number){
           result = `Result found at index: ${i}`; 
        }  
    }
    return result;
}

var arr = [1,2,3,4,5,6,7,8,9,10];

const resultIndex = searchItem(arr, 9)

console.log(resultIndex)
