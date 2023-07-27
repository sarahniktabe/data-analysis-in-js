var data = [
  //children
  { id: "4", parentId: "3", title: "L2-1" },
  { id: "5", parentId: "4", title: "L3-1" },
  { id: "2", parentId: "1", title: "L1-1" },
  { id: "3", parentId: "1", title: "L1-2" },
  { id: "6", parentId: "5", title: "L4-1" },
  //test more
  { id: "7", parentId: "10", title: "L10-1" },
  { id: "8", parentId: "7", title: "L7-1" },
  //roots
  { id: "1", title: "root1" },
  { id: "10", title: "root2" },
];

//For Style
var space = 2;

//main function
function flatTreeToTree() {
  const root = data.filter((item) => item.parentId === undefined);
  root.forEach((item) => {
    console.log(item);
    printChild(data, item.id, space);
  });
}


//recursive function
function printChild(items, parentId, space) {
  items.filter((x) => x.parentId == parentId)
    .forEach((child) => {
      //repeat method for tree style, adding gap
      console.log(" ".repeat(space + 2) + JSON.stringify(child));
      printChild(data, child.id, space + 2);
    });
}

flatTreeToTree();
