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
        return Math.floor((index-1)/2);
    }

    #swap(index1, index2){
        [this.#heap[index1], this.#heap[index2]]=[this.#heap[index2], this.#heap[index1]];
    }

    getHeap(){
        return [...this.#heap] //return the copy of this.#heap
    }


}