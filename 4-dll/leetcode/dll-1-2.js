class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
 
class DoublyLinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

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

    makeEmpty() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
 
    push(value){
        const newNode = new Node(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // WRITE THE SWAPFIRST METHOD HERE //

        swapFirstLast() {
            //if (this.length < 2) {
                
            //}
        
            // Remove the first node Shift
            const firstNode = this.head;
            this.head = this.head.next;
            this.head.prev = null;
            firstNode.next = null;
        
            // Remove the last node Pop
            const lastNode = this.tail;
            this.tail = this.tail.prev;
            this.tail.next = null;
            lastNode.prev = null;
        
            // Unshift the first node to the end 
            lastNode.next = this.head;
            this.head.prev = lastNode;
            this.head = lastNode;
        
            // Push the last node to the beginning
            firstNode.prev = this.tail;
            this.tail.next = firstNode;
            this.tail = firstNode;
        
            return this;
        }

        swapFirstLast() {
            if (!this.head || !this.tail || this.head === this.tail) {
                return this; // If the list is empty or has only one node, no swapping needed
            }
        
            // Remove the first node
            const firstNode = this.head;
            this.head = this.head.next;
            this.head.prev = null;
            firstNode.next = null;
        
            // Remove the last node
            const lastNode = this.tail;
            this.tail = this.tail.prev;
            this.tail.next = null;
            lastNode.prev = null;
        
            // Unshift the first node to the end
            lastNode.next = this.head;
            this.head.prev = lastNode;
            this.head = lastNode;
        
            // Push the last node to the beginning
            firstNode.prev = this.tail;
            this.tail.next = firstNode;
            this.tail = firstNode;
        
            return this;
        }
        //fail at 1should swap correctly with two  elemtetms 2 should swap negative value and swap null
        


    
    /////////////////////////////////////

}



let myDoublyLinkedList = new DoublyLinkedList(1);
myDoublyLinkedList.push(2);
myDoublyLinkedList.push(3);
myDoublyLinkedList.push(4);
myDoublyLinkedList.push(5);

console.log("Original list:");
myDoublyLinkedList.printList();

myDoublyLinkedList.swapFirstLast();
console.log("\nList after swapping first and last elements:");
myDoublyLinkedList.printList();

// Create a new list with an even number of elements
let myDoublyLinkedList2 = new DoublyLinkedList(1);
myDoublyLinkedList2.push(2);
myDoublyLinkedList2.push(3);
myDoublyLinkedList2.push(4);
myDoublyLinkedList2.push(5);
myDoublyLinkedList2.push(6);

console.log("\nOriginal list 2:");
myDoublyLinkedList2.printList();

myDoublyLinkedList2.swapFirstLast();
console.log("\nList 2 after swapping first and last elements:");
myDoublyLinkedList2.printList();


/*
    EXPECTED OUTPUT:
    ----------------
    Original list:
    1
    2
    3
    4
    5
    List after swapping first and last elements:
    5
    2
    3
    4
    1
    Original list 2:
    1
    2
    3
    4
    5
    6
    List 2 after swapping first and last elements:
    6
    2
    3
    4
    5
    1
*/
