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
        if (!head || !head.next || k == 0) return head;
        let len = 0;
        let current = head;
        while (current) {
            len++;
            current = current.next;
        }
        let rotationPoint = len - (k % len);
        if (len == rotationPoint) return head;
        current = head;
        let firstPart = current;
        let secondPart;
        rotationPoint -= 1;
        while (current.next) {
            if (rotationPoint == 0) {
                let temp = current.next;
                current.next = null;
                current = temp;
                secondPart = temp;
            } else current = current.next;
            rotationPoint--;
        }
        current.next = firstPart;
        return secondPart;
    }
}
