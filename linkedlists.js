class _list {
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
          this.head = new _list(item, this.head);
     }

     insertLast(item) {
          if (this.head === null) {
               this.insertFirst(item);
          }
          else {
               let templist = this.head;
               while (templist.next !== null) {
                    templist = templist.next;
               }
               templist.next = new _list(item, null);
          }
     }

     find(item) {
          // Start at the head
          let currlist = this.head;
          // If the list is empty
          if (!this.head) {
               return null;
          }
          // Check for the item 
          while (currlist.value !== item) {
               /* Return null if it's the end of the list 
                  and the item is not on the list */
               if (currlist.next === null) {
                    return null;
               }
               else {
                    // Otherwise, keep looking 
                    currlist = currlist.next;
               }
          }
          // Found it
          return currlist;
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
          let currlist = this.head;
          // Keep track of previous
          let previouslist = this.head;

          while ((currlist !== null) && (currlist.value !== item)) {
               // Save the previous list 
               previouslist = currlist;
               currlist = currlist.next;
          }
          if (currlist === null) {
               console.log('Item not found');
               return;
          }
          previouslist.next = currlist.next;
     }

     insertBefore(item) {
          if (this.head === null) {
               this.insertFirst(item)
          }
          else {
               // Start at the head
               let currlist = this.head;
               // Keep track of previous
               let previouslist = this.head;

               while ((currlist !== null) && (currlist.value !== item)) {
                    // Save the previous list 
                    previouslist = currlist;
                    currlist = currlist.next;
               }
               if (currlist === null) {
                    this.insertLast(item)
                    return;
               }
               previouslist.next = new _list(item, currlist);
          }
     }

     insertAfter(item, value) {
          if (this.head === null) {
               this.insertFirst(item)
          }
          else {
               let currlist = this.head;
               while ((currlist !== null) && (currlist.value !== value)) {
                    currlist = currlist.next
               }
               if (currlist === null) {
                    this.insertLast(item)
                    return;
               }
               currlist.next = new _list(item, currlist.next)
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
               let currlist = this.head;
               for (let i = 2; i < num; i++) {
                    if (currlist === null) {
                         this.insertLast(item)
                         return;
                    }
               }
               this.insertAfter(item, currlist.value)
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
//findPrevious: finds the list before the item you are looking for
//findLast: returns the last list in the linked list

function display(head) {
     let currlist = head
     while (currlist.next !== null) {
          currlist = currlist.next
     }
     return console.log(currlist.value)
}

function size(list) {
     let listSize = 0;
     let currlist = list.head
     while (currlist.next !== null) {
          listSize++
          currlist = currlist.next
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
     let currlist = list.head;
     while (currlist.next.value !== item) {
          currlist = currlist.next
     }
     return console.log(currlist.value)
}

function findLast(list) {
     let currlist = list.head;
     while (currlist.next !== null) {
          currlist = currlist.next
     }
     return console.log(currlist.value)
}


//What does this program do?

function WhatDoesThisProgramDo(list) {
     let current = list.head;
     while (current !== null) {
          let newlist = current;
          while (newlist.next !== null) {
               if (newlist.next.value === current.value) {
                    newlist.next = newlist.next.next;
               }
               else {
                    newlist = newlist.next;
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
