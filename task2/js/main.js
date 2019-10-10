"use strict";

let todoObjectsArray = [];

let initData = () => {
  todoObjectsArray.push(
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

  for (let it in todoObjectsArray) {
    let div = document.createElement("div");
    let content = document.createTextNode(
      todoObjectsArray[it].title + " " + todoObjectsArray[it].description
    );

    div.appendChild(content);
    displayList.appendChild(div);
  }
};

initData();
setInterval(updateList, 1000);
