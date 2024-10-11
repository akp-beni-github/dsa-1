//remove the top idx then always pop the last left child to make it complete and compare it from the top down 
class Heap{
    
    #heap= []

    //ro  l  ri  
    //0   1  2  3   4  5  6  7  8

    //    ro     l  ri  
    //0   1   2  3   4  5  6  7  8

    //       ro        l  ri  
    //0   1   2  3   4  5  6  7  8  

    #leftChild(index){
        return index*2 +1;
    }

    #rightChild(index){
        return index*2 +2;
    }

    #parent(index){//go back up
        return Math.floor((index-1)/2); //return idx for parent
    }

    #swap(index1, index2){
        [this.#heap[index1], this.#heap[index2]]=[this.#heap[index2], this.#heap[index1]];
    }

    getHeap(){
        return [...this.#heap] //return the copy of this.#heap
    }

    insert(value){ //start at index 0 and as a complete binary tree
        this.#heap.push(value) //push value to empty array
        let current = this.#heap.length-1; // the last right child (completed) 
        //start with idx 0 so the last idx should be length-1
        
        while( current > 0 && this.#heap[current] > this.#heap[this.#parent(current)] ){ // to the top or until top is bigger than bottom(while bottom>top)
            this.#swap( current, this.#parent(current) ); // swap up by idx 
            current = this.#parent[current];//move pointer up similar to current=curent.next
        }
    }


    remove(){
        if (this.#heap.length === 0){
            return null
        }
        if (this.#heap.length ===1){
            return this.#heap.pop();
        }

        const maxValue = this.#heap[0]; // at the top
        this.#heap[0]= this.#heap.pop(); // pop the last index store at index0
        this.#sinkDown(0);

        return maxValue
    }

    #sinkDown(index){//after remove you have to iterate down
 
        //two pointers index, maxindex
        let maxIndex = index; //at first both pointers at the same place at the top
        let size =this.#heap.length;// just in case that the tree is not completed and left or right index is empty
        while(true){ 
            let rightIndex= this.#leftChild(index);
            let leftIndex= this.#rightChild(index);

            //if value at the bottom 
            if (this.#heap[leftIndex] > this.#heap[maxIndex] && leftIndex < size){// index of array < arraysize (the index is still in the array)
                maxIndex = leftIndex;
            }
            if (this.#heap[rightIndex] > this.#heap[maxIndex] && rightIndex < size){
                maxIndex = rightIndex;
            }
            //after maxIndex moved down, swap the values. 
            if (maxIndex !== index){
                this.#swap(index, maxIndex);
                index = maxIndex; //move both down to iterate checking downward
            }

            else{
                return ;  
            }
        }
    }

}

const myHeap = new Heap();
myHeap.insert(95);
myHeap.insert(75);
myHeap.insert(80);
myHeap.insert(55);
myHeap.insert(60);
myHeap.insert(50);
myHeap.insert(65);

console.log(myHeap.getHeap());
myHeap.remove();

console.log(myHeap.getHeap());
myHeap.remove();

console.log(myHeap.getHeap());