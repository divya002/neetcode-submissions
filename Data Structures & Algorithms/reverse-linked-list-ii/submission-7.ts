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
     * @param {number} left
     * @param {number} right
     * @return {ListNode}
     */
    reverseBetween(head: ListNode | null, left: number, right: number): ListNode {
        if (!head || !head.next || left == right) return head;
        let dummyNode = new ListNode(0, head);
        let leftPrev = dummyNode;

        for (let i = 1; i < left; i++) {
            leftPrev = leftPrev.next;
        }

        let current = leftPrev.next;
        let rightTail = current;
        let prev = null;

        for (let i = 0; i < right - left + 1; i++) {
            let temp = current.next;
            current.next = prev;
            prev = current;
            current = temp;
        }

        rightTail.next = current;
        leftPrev.next = prev;
        return dummyNode.next;
    }
}
