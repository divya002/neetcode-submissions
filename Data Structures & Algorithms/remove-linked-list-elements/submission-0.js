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
     * @param {number} val
     * @return {ListNode}
     */
    removeElements(head, val) {
        let current = head;
    while(current){
        if(current.next && current.next.val==val){
            let temp= current.next.next;
            current.next=temp;
        }else
        current=current.next;
    }
    current=head;
    if(current && current.val==val){
        current=current.next;
        head=current;
    }
    return head;
    }
}
