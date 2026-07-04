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
        let len = 0;
        let slow = head;
        let fast = head;
        while (fast && fast.next) {
            fast = fast.next.next;
            slow = slow.next;
        }

        let prev = null;
        while (slow) {
            let temp = slow.next;
            slow.next = prev;
            prev = slow;
            slow = temp;
        }
        let result = false;
        while (prev) {
            if (prev.val == head.val) {
                result = true;
            } else {
                result = false;
                break;
            }
            prev = prev.next;
            head = head.next;
        }
        return result;
    }
}
