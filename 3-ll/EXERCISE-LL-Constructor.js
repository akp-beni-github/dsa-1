// WRITE NODE CLASS HERE //
class Node {
    constructor(val){//create new node
        this.value=val;
        this.next=null;
    }
}
///////////////////////////



class LinkedList {//setting head and tail
	// WRITE ALL CONSTRUCTOR HERE //
    constructor(val){
        const newNode = new Node(4); //new class
        this.head = newNode;
        this.tail = this.head;//temp
        this.length=1; //keep track of the LL's length
    }
	///////////////////////////////

    printList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    getTail() {
        if (this.tail === null) {
            console.log("Tail: null");
        } else {
            console.log("Tail: " + this.tail.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

}


function test() {
    let myLinkedList = new LinkedList(4);
    
    myLinkedList.getHead();
    myLinkedList.getTail();
    myLinkedList.getLength();
    console.log("\nLinked List:");
    myLinkedList.printList();
}


test();


/*
    EXPECTED OUTPUT:
    ----------------
    Head: 4 (head is pointing to node with the value of 4)
    Tail: 4
    Length: 1
    
    Linked List:
    4

*/