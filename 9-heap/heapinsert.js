class Heap{
    
    #heap= []

    //ro  l  ri  
    //1   2  3   4  5  6  7  8

    //    ro     l  ri  
    //1   2  3   4  5  6  7  8

    //       ro        l  ri  
    //1   2  3   4  5  6  7  8  

    #leftChild(index){
        return index*2;
    }

    #rightChild(index){
        return index*2 +1;
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
    }//going up is one way 

}

const myHeap = new Heap();
myHeap.insert(99);
myHeap.insert(72);
myHeap.insert(61);
myHeap.insert(58);

console.log(myHeap.getHeap());
myHeap.insert(100);

console.log(myHeap.getHeap());
myHeap.insert(75);

console.log(myHeap.getHeap());