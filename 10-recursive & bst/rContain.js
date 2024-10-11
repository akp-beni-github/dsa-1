class BST {
    constructor() {
        this.root = null;
    }



    //(value to check, pointer to move)
    #rContain(value, current = this.root) { //return true if contain false if nonr after iteration
        //pointer start from the top
        //while(true){
            //two base cases
            if (current === null){// if iteration to the bottom and still doesnt return true then return false
            //or if there aint no tree from the start
                return false;

            }
            if (current.value === value){// 
                return true;
            }    

            //two recursive case bigger or smaller
            if (current.value > value){
                //current= current.left;
                return this.rContain(value, current.left);
            }
            if (current.value < value){
                //current = current.right
                return this.rContain(value, current.right);
            }

    //}   

    }

    contain(value) {
        return 
    }


    insert(value){
        //in the end will be currentNode.right/left=  currentNode( the last current node from base case)
    }
}    