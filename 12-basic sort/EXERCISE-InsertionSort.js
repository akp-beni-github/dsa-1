
function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let temp = array[i];
        for (var j = i - 1; array[j] > temp && j > -1; j--) {
            array[j+1] = array[j];
        }
        array[j+1] = temp;
   }
   return array;
}
// WRITE INSERTIONSORT FUNCTION HERE //
function insertionSort(array){//comparing all the way to the front
    for (let i =1; i< array.length; i++){//iterate forward
        let temp = array[i];//start from second front
        for (var j = i-1; array[j]>temp&& j >-1  ; j--){//comparing backward  *****using var to use j outside of the forloop
            array[j+1]= array[j]; // i-1 > i swap
        }
        array[j+1]=temp;    
    }return array;
}
///////////////////////////////////////
 

 

function test() {
    let myArray = [4,2,6,5,1,3];
    insertionSort(myArray);
    console.log(myArray);
}


test();


/*
    EXPECTED OUTPUT:
    ----------------
    [ 1, 2, 3, 4, 5, 6 ]

*/  