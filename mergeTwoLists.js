//combine two sorted linked lists
const mergeTwoLists = (list1, list2) => {
  if (list1 === null) return list2;

  while (list2 !== null) {
    let result = insertInto(list1, null, list2.val);
    if (result !== null) list1 = result;
    list2 = list2.next;
  }

  return list1;
}

const insertInto = (current, prev, val) => {
  if (current.val < val && current.next !== null) {
    return insertInto(current.next, current, val);
  } else {
    let newNode = ListNode(val);
    if (current.val > newNode.val) {
      newNode.next = current;
      if (prev) {
        prev.next = newNode;    
        return null;    
      } else {
        return newNode;
      }
    } else {
      if (current.next) {
        newNode.next = current.next;
      }
      current.next = newNode;
      return null;
    }
  }
}

const ListNode = (val) => ({
  val: val,
  next: null
});

const print = (node) => {
  let output = [];
  const pushToArray = (node) => {
    if (node !== null) {
      output.push(node.val);
      pushToArray(node.next);
    }
  }
  pushToArray(node);
  console.log(output);  
}

const testList1 = ListNode(2);
const testList2 = ListNode(1);

// const testList1 = ListNode(1);
// insertInto(testList1, null, 2);
// insertInto(testList1, null, 4);
// print(testList1);

// const testList2 = ListNode(1);
// insertInto(testList2, null, 3);
// insertInto(testList2, null, 4);
// print(testList2);

const solution = mergeTwoLists(testList1, testList2);
print(solution);