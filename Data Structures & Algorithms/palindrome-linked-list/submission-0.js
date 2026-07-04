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
     * @return {boolean}
     */
    isPalindrome(head) {
        let len = 0
    let current = head;
    while (current) {
        current = current.next;
        len++;
    }
    if (len == 1) return true;
    len = (len % 2 == 0) ? Math.floor(len / 2) : Math.floor(len / 2) + 1;
    current = head;
    while (len) {
        current = current.next;
        len--;
    }

    let prev = null;
    while (current) {
        let temp = current.next;
        current.next = prev;
        prev = current;
        current = temp;
    }
    let result = false;
    while (prev) {
        if (prev.val == head.val) {
            result = true;
        }
        else {
            result = false;
            break;
        }
        prev = prev.next;
        head = head.next;
    }
    return result;
    }
}
