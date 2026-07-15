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
        if (!head || !head.next) return head;
        let current = head;
        let copyNode = new ListNode(0, head);
        let dummy = copyNode;
        
        //iterate till left prev;

        for(let i=1;i<left;i++){
            dummy=current;
            current= current.next;
        }
        let prev = null;
        for(let i=0;i<right-left+1;i++){
             let temp = current.next;
             current.next=prev;
             prev=current;
             current=temp;
        }

        dummy.next.next=current;
        dummy.next= prev;
        return copyNode.next;
    }
}
