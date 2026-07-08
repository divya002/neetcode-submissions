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

    let rev = null;
    while (slow) {
        let temp = slow.next;
        slow.next = rev;
        rev = slow;
        slow = temp;
    }

    let first = head;
    let second = rev;

    let result = new ListNode(0, null);
    let temp = result;
    console.log(second)
    while (second) {
        let firstNext = first.next;
        let secondNext = second.next;
        temp.next = first;
        temp = temp.next;
        temp.next = second;
        temp = temp.next;
        first = firstNext;
        second = secondNext;
    }
    temp.next = null;
}
}
