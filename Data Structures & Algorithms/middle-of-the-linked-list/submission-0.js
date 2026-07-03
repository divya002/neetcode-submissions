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
        let length=0;
    let current=head;
    while(current.next!=null){
        length++;
        current=current.next;
    }
    let mid = Math.floor(length/2);
    mid = (length%2==0)?mid:mid+1;
    length=0;
    current=head;
    while(length<mid){
        current=current.next;
        length++;
    }
    return current;
    }
}
