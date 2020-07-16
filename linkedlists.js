class _Node {
     constructor(value, next) {
          this.value = value;
          this.next = next;
     }
}

class LinkedList {
     constructor() {
          this.head = null;
     }

     insertFirst(item) {
          this.head = new _Node(item, this.head);
     }

     insertLast(item) {
          if (this.head === null) {
               this.insertFirst(item);
          }
          else {
               let tempNode = this.head;
               while (tempNode.next !== null) {
                    tempNode = tempNode.next;
               }
               tempNode.next = new _Node(item, null);
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
          // If the node to be removed is head, make the next node head
          if (this.head.value === item) {
               this.head = this.head.next;
               return;
          }
          // Start at the head
          let currNode = this.head;
          // Keep track of previous
          let previousNode = this.head;

          while ((currNode !== null) && (currNode.value !== item)) {
               // Save the previous node 
               previousNode = currNode;
               currNode = currNode.next;
          }
          if (currNode === null) {
               console.log('Item not found');
               return;
          }
          previousNode.next = currNode.next;
     }

     insertBefore(item) {
          if (this.head === null) {
               this.insertFirst(item)
          }
          else {
               // Start at the head
               let currNode = this.head;
               // Keep track of previous
               let previousNode = this.head;

               while ((currNode !== null) && (currNode.value !== item)) {
                    // Save the previous node 
                    previousNode = currNode;
                    currNode = currNode.next;
               }
               if (currNode === null) {
                    this.insertLast(item)
                    return;
               }
               previousNode.next = new _Node(item, currNode);
          }
     }

     insertAfter(item, value) {
          if (this.head === null) {
               this.insertFirst(item)
          }
          else {
               let currNode = this.head;
               while ((currNode !== null) && (currNode.value !== value)) {
                    currNode = currNode.next
               }
               if (currNode === null) {
                    this.insertLast(item)
                    return;
               }
               currNode.next = new _Node(item, currNode.next)
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
               for (let i = 2; i < num; i++) {
                    if (currNode === null) {
                         this.insertLast(item)
                         return;
                    }
               }
               this.insertAfter(item, currNode.value)
          }
     }
}

function main() {
     const SLL = new LinkedList()
     SLL.insertFirst('Apollo')
     SLL.insertFirst('Boomer')
     SLL.insertFirst('Helo')
     SLL.insertFirst('Husker')
     SLL.insertFirst('Starbuck')

     SLL.insertLast('Tauhida')

     SLL.remove('squirrel')

     SLL.insertBefore('Athena', 'Boomer')

     SLL.insertAfter('Hotdog', 'Helo')

     SLL.insertAt('Kat', 3)

     SLL.remove('Tauhida')

     console.log(SLL)
}

//Supplemental functions
//display: displays the linked list
//size: returns the size of the linked list
//isEmpty: finds if the list is empty or not (without using the size() function)
//findPrevious: finds the node before the item you are looking for
//findLast: returns the last node in the linked list

function display(head) {
     let currNode = head
     while (currNode.next !== null) {
          currNode = currNode.next
     }
     return console.log(currNode.value)
}

function size(list) {
     let listSize = 0;
     let currNode = list.head
     while (currNode.next !== null) {
          listSize++
          currNode = currNode.next
     }
     listSize++;
     return console.log(listSize)
}

function isEmpty(list) {
     if (list.head === null) {
          return console.log(true);
     }
     return console.log(false)
}

function findPrevious(item, list) {
     let currNode = list.head;
     while (currNode.next.value !== item) {
          currNode = currNode.next
     }
     return console.log(currNode.value)
}

function findLast(list) {
     let currNode = list.head;
     while (currNode.next !== null) {
          currNode = currNode.next
     }
     return console.log(currNode.value)
}


//What does this program do?

function WhatDoesThisProgramDo(lst) {
     let current = lst.head;
     while (current !== null) {
          let newNode = current;
          while (newNode.next !== null) {
               if (newNode.next.value === current.value) {
                    newNode.next = newNode.next.next;
               }
               else {
                    newNode = newNode.next;
               }
          }
          current = current.next;
     }
     console.log(current)
}