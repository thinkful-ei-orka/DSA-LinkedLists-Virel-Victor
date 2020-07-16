class _Node {
     constructor(value, prev, next) {
          this.value = value;
          this.next = next;
          this.prev = prev;
     }
}

class LinkedList {
     constructor() {
          this.head = null;
          this.tail = null;
     }

     insertFirst(item) {
          const newNode = new _Node(item, null, this.head)
          this.head = newNode;
          this.tail = newNode;
     }

     insert(item) {
          if (this.head === null) {
               this.insertFirst(item);
          }
          else {
               let tempNode = this.head;
               while (tempNode.next !== null) {
                    tempNode = tempNode.next;
               }
               tempNode.next = new _Node(item, this.tail, null);
               this.tail = tempNode.next
          }
     }

     find(item) {
          // Start at the head
          let currNode = this.head;
          // If the list is empty
          if (!this.head) {
               return null;
          }
          // Check for the item 
          while (currNode.value !== item) {
               /* Return null if it's the end of the list 
                  and the item is not on the list */
               if (currNode.next === null) {
                    return null;
               }
               else {
                    // Otherwise, keep looking 
                    currNode = currNode.next;
               }
          }
          // Found it
          return currNode;
     }

     remove(item) {
          // If the list is empty
          if (!this.head) {
               return null;
          }
          // If the list to be removed is head, make the next list head
          if (this.head.value === item) {
               this.head = this.head.next;
               return;
          }
          // Start at the head
          let currNode = this.head;
          // Keep track of previous
          let previousNode = this.head;

          while ((currNode !== null) && (currNode.value !== item)) {
               // Save the previous list 
               previousNode = currNode;
               currNode = currNode.next;
          }
          if (currNode === null) {
               console.log('Item not found');
               return;
          }
          previousNode.next = currNode.next;
     }

     insertBefore(item, item2) {
          if (this.head === null) {
               this.insertFirst(item)
          }
          else {
               // Start at the head
               let currNode = this.head;
               // Keep track of previous
               let previousNode = this.head;

               while ((currNode !== null) && (currNode.value !== item2)) {
                    // Save the previous list 
                    previousNode = currNode;
                    currNode = currNode.next;
               }
               if (currNode === null) {
                    this.insert(item)
                    return;
               }
               previousNode.next = new _Node(item, previousNode, currNode);
               this.tail = previousNode.next
          }
     }

     insertAfter(item, value) {
          if (this.head === null) {
               this.insertFirst(item)
          }
          else if (this.tail.value === value) {
               const newNode = new _Node(item, this.tail, null)
               this.tail.next = newNode
               this.tail = newNode
          }
          else {
               let currNode = this.tail;
               while ((currNode !== null) && (currNode.value !== value)) {
                    currNode = currNode.next
                    nextNode = currNode.next
               }
               currNode.prev
          }
     }

     insertAt(item, num) {
          if (this.head === null) {
               this.insertFirst(item)
          }
          if (num === 1) {
               this.insertFirst(item)
          }
          else {
               let currNode = this.head;
               let prevNode = this.head;
               this.tail = currNode;
               for (let i = 2; i < num; i++) {
                    if (currNode === null) {
                         this.insert(item)
                         return;
                    }
               }
               prevNode.next = new _Node(item, this.tail, currNode)
          }
     }
}

// 9. Doubly linked list
// Implement a doubly linked list. The primary functions of the doubly linked list would be insert 
// (First, Last, Before, After, and At), remove, and find. Write a function mainDLL, and within it 
// create the doubly linked list DLL and 

// add the following items to it: Aquaria, Caprica, Gemenon, Picon, Sagittaron.

function mainDLL() {
     const DLL = new LinkedList();

     DLL.insertFirst('Aquaria')
     DLL.insert('Caprica')
     DLL.insert('Gemenon')
     DLL.insert('Picon')
     DLL.insert('Sagittaron')

     // Add Tauron to the list
     DLL.insert('Tauron')

     // Remove Picon from the list
     DLL.remove('Picon')
}

const DLL = new LinkedList();

DLL.insertFirst('Aquaria')
DLL.insert('Caprica')
DLL.insert('Gemenon')
DLL.insert('Picon')
DLL.insert('Sagittaron')

// Add Tauron to the list
DLL.insert('Tauron')

// Remove Picon from the list
DLL.remove('Picon')

function reverse(list) {
     let currNode = list.head;
     let prevNode = list.prev;
     let next = currNode.next;

     while(currNode) {
          next = currNode.next;
          previous = currNode.prev;
          currNode.next = previous;
          currNode.prev= next;
          currNode = next;
     }
     return prevNode;
}

console.log(DLL)
console.log(DLL.head)
console.log(DLL.tail)