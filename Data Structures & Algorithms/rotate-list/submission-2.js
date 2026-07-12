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
     * @param {number} k
     * @return {ListNode}
     */
    rotateRight(head, k) {
        if (!head) return head;
        let len = 1;
        let current = head;
        while (current.next) {
            len++;
            current = current.next;
        }
        k = k % len;
        current.next = head;
        for (let i = 0; i < len - k; i++) {
            current = current.next;
        }
        head = current.next;
        current.next = null;
        return head;
    }
}
