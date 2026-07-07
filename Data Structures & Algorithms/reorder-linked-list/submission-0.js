/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let secondStart = slow.next; 
    slow.next = null;//making first split
    
    slow=secondStart;
    let rev = null;
    while (slow) {
        let temp = slow.next;
        slow.next = rev;
        rev = slow;
        slow = temp;
    }

    let first = head;
    let second = rev;

    while (second) {
        let firstNext=first.next;
        let secondNext=second.next;
        first.next=second;
        second.next=firstNext;
        second=secondNext;
        first=firstNext;
    }
    }
}
