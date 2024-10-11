// WRITE BUBBLESORT FUNCTION HERE // 2 at the time
function bubbleSort(array){
    for (let i=array.length; i>0; i--){
        for (let j=0; j<i; j++){ //i=5 j=0->4
            if (array[j]<array[j+1]){
                //swap
                let temp = array[j+1];
                array[j+1]=array[j];
                array[j]=temp;

            }
        }
    }
}
////////////////////////////////////

 

function test() {
    let myArray = [4,2,6,5,1,3];
    bubbleSort(myArray);
    console.log(myArray);
}


test();


/*
    EXPECTED OUTPUT:
    ----------------
    [ 1, 2, 3, 4, 5, 6 ]

*/   


