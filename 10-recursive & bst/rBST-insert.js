class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BST {
    constructor() {
        this.root = null;
    }
//no swap just iterate recursively
//the remove is just it own specifc method u have to remember



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

    rContain(value) {
        if(this.root==null){ this.root= new Node(value)}
        this.#rContain(value);
    }
    
    //idea is to return value to the next pointer
    #rInsert(value, currentNode = this.root){
        //in the end will be currentNode.right/left=  currentNode( the last current node from base case)
        if (currentNode.left ==  null){
            return newNode(value); // current.l/r = (return) 
        }

        //recursive cases going down
        if (value < currentNode.value){
            currentNode.left =this.#rInsert(value, currentNode.left);
        }
        if (value > currentNode.value){
            currentNode.right= this.#rInsert(value, currentNode.right);
        }
        
        return currentNode;//after insert succesfully
    
    }

    rInsert(value){
        if(this.root==null){ this.root= new Node(value)}
        this.#rInsert(value);
    }
}    