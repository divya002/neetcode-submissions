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
     * @return {ListNode}
     */
    middleNode(head) {
       let n = 0;
        let cur = head;
        while (cur) {
            cur = cur.next;
            n++;
        }

        n = Math.floor(n / 2);
        cur = head;
        while (n) {
            n--;
            cur = cur.next;
        }
        return cur;
    }
}
