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
          // If the list to be removed is head, make the next list head
          if (this.head.value === item) {
               this.head = this.head.next;
               return;
          }
          // Start at the head
          let currNode = this.head;
          // Keep track of previous
          let prevNode = this.head;

          while ((currNode !== null) && (currNode.value !== item)) {
               // Save the previous list 
               prevNode = currNode;
               currNode = currNode.next;
          }
          if (currNode === null) {
               console.log('Item not found');
               return;
          }
          prevNode.next = currNode.next;
     }

     insertBefore(item) {
          if (this.head === null) {
               this.insertFirst(item)
          }
          else {
               // Start at the head
               let currNode = this.head;
               // Keep track of previous
               let prevNode = this.head;

               while ((currNode !== null) && (currNode.value !== item)) {
                    // Save the previous list 
                    prevNode = currNode;
                    currNode = currNode.next;
               }
               if (currNode === null) {
                    this.insertLast(item)
                    return;
               }
               prevNode.next = new _Node(item, currNode);
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

     insertCycle(item, next) {
          if (this.head === null) {
               this.insertFirst(item)
          }
          else {
               let tempNode = this.head
               while(tempNode.next!== null) {
                    tempNode = tempNode.next
               }
               let nextNode = this.head
               while(nextNode.next!==null && nextNode.value!==next) {
                    nextNode = nextNode.next
               }
               tempNode.next = new _Node(item, nextNode)
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

     const CycleList = new LinkedList()
     CycleList.insertFirst('Apollo')
     CycleList.insertFirst('Boomer')
     CycleList.insertFirst('Helo')
     CycleList.insertFirst('Husker', 'Helo')
     cycle.head(cycleList.head)

}

//Supplemental functions
//display: displays the linked list
//size: returns the size of the linked list
//isEmpty: finds if the list is empty or not (without using the size() function)
//findPrevious: finds the list before the item you are looking for
//findLast: returns the last list in the linked list

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

function WhatDoesThisProgramDo(list) {
     let current = list.head;
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

//The program removes any duplicates from the list. 
//It is linear O(n), because it depends on the number of duplicates that are in the list currently.

//5. Reverse a list
// Write an algorithm to reverse a linked list. The time complexity of your algorithm should be linear (O(n)). 
// For this exercise, notice we are not asking you just to print the linked list in reverse or use another 
// linked list to store the value in reverse order. Your program should reverse the direction of a given singly 
// linked list. In other words, all pointers should point backward. 
// BONUS: Solve this problem using both recursive and iterative algorithms.

function reverse(list) {
     if (list == null) {
          return null
     }
     if (list.next == null) {
          return list.next
     }
     let second = list.next;
     list.next = null;
     let reversedRest = reverse(second);
     second.next = list;

     return reversedRest
}

// 6. 3rd from the end
// Write an algorithm to find the 3rd element from the end of a linked list. 
// Note You may be tempted to add a length property to your linked list class. 
// The length property is not a typical property of linked list, therefore 
// don't make any modification to the linked list class that is provided to you.

function thirdFromTheEnd(list) {
     let third = list.head;
     let thirdFromEnd = list.head.next.next.next;
     while(thirdFromEnd !== null) {
          third = third.next;
          thirdFromEnd = thirdFromEnd.next;
     }
     return third.value
}

const SLL = new LinkedList()
SLL.insertFirst('Apollo')
SLL.insertFirst('Boomer')
SLL.insertFirst('Helo')
SLL.insertFirst('Husker')
SLL.insertFirst('Starbuck')

// console.log(thirdFromTheEnd(SLL))

function middlelist(list){
     if(list.head===null){
          return null
     }
     let one = list.head;
     let two = list.head;

     while(two !==null && two.next!==null){
          one = one.next;
          two = two.next.next;
     }
     return one.value
}
// console.log(middlelist(SLL))


// 8. Cycle in a list
// Write an algorithm to find whether a linked list has a cycle (i.e., 
// whether a node in the list has its next value pointing to an earlier node 
// in the list). For this exercise, create a linked list with the name CycleList. 
// Be sure to insert nodes in the list so that it has a cycle. 
// Then test your program with a cycleList function.

const CycleList = new LinkedList()
CycleList.insertFirst('Apollo')
CycleList.insertFirst('Boomer')
CycleList.insertFirst('Helo')
CycleList.insertCycle('Husker', 'Helo')
cycle(CycleList.head)

function cycle(head) {
     let two = head
     let one = head

     while(two.next !== null) {
          two = two.next.next
          one = one.next

          if (one === two) 
          return console.log(true)
     }
     return console.log(false)
}

console.log(cycle(CycleList))
