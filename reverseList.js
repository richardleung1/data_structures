const reverseList = function(head){
    let prev = null;
    let curr = head; //current
    let next = null;

    while(curr){
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};