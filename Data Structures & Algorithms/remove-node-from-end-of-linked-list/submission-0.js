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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let length =0;
    let current=head;
    while(current){
        length++;
        current=current.next;
    }
    if(length==n){
        return head=head.next;
    }
    length= length-n;
    current=head;
    while(length>0){
        length--;
        if(length==0)
        current.next=current.next.next;
        else
        current=current.next;

    }
    return head;
    }
}
