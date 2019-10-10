"use strict";

let itemList = [];

let initData = () => {
  itemList.push(
    {
      title: "Learn JS",
      description: "Create a demo application for my TODO's",
      place: "445",
      dueDate: new Date(2019, 10, 16)
    },
    {
      title: "Lecture test",
      description: "Quick test from the first three lectures",
      place: "F6",
      dueDate: new Date(2019, 10, 17)
    }
  );
};

let updateList = () => {
  let displayList = document.getElementById("displayList");

  while (displayList.firstChild) {
    displayList.removeChild(displayList.firstChild);
  }

  for (let it in itemList) {
    let div = document.createElement("div");
    let content = document.createTextNode(
      itemList[it].title + " " + itemList[it].description
    );

    div.appendChild(content);
    displayList.appendChild(div);
  }
};

let addItem = () => {
  let item = {
    title: document.getElementById("inputTitle").value,
    description: document.getElementById("inputDescription").value,
    place: document.getElementById("inputPlace").value,
    dueDate: document.getElementById("inputDate").value
  };

  itemList.push(item);
};

initData();
setInterval(updateList, 1000);
