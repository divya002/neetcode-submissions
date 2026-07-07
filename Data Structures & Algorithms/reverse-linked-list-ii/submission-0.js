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
    reverseBetween(head, left, right) {
        let dummyNode = new ListNode(0,head);
        let current=head;
        let leftPrev= dummyNode;
        for(let i=0;i<left-1;i++){
            leftPrev=current;
             current=current.next;
        }
        let prev = null;
        for(let i=0;i<right-left+1;i++){
            let temp=current.next;
            current.next=prev;
            prev=current;
            current=temp;
        }
        leftPrev.next.next=current;
        leftPrev.next=prev;
        return dummyNode.next;

    }
}
