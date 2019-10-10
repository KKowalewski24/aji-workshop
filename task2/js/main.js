"use strict";

/*------------------------ VARIABLE ------------------------*/
const ITEMS = "items";
const FIREBASE_LINK = "https://schedulelist-d5850.firebaseio.com/.json";
const FIREBASE_KEY = "ihKtSAJNoNNsSLI4rdiVCcub5PuMeY5eIqnLGXpR";
let itemList = [];

/*------------------------ GET | POST ------------------------*/
let getJsonData = () => {
  $.ajax({
    url: FIREBASE_LINK,
    type: 'GET',
    headers: {
      'secret-key': FIREBASE_KEY
    },
    success: (data) => {
      if (data != null) {
        itemList = data;
        console.log(data);
      }
    },
    error: (err) => {
      console.log(err.responseJSON);
    }
  })
};

let postJsonData = () => {
  $.ajax({
    url: FIREBASE_LINK,
    type: 'PUT',
    headers: {
      'secret-key': FIREBASE_KEY
    },
    contentType: 'application/json',
    data: JSON.stringify(itemList),
    success: (data) => {
      console.log(data);
    },
    error: (err) => {
      console.log(err.responseJSON);
    }
  })
};

/*------------------------ ADD ITEM ------------------------*/
let addItem = () => {
  let item = {
    title: document.getElementById("inputTitle").value,
    description: document.getElementById("inputDescription").value,
    place: document.getElementById("inputPlace").value,
    dueDate: document.getElementById("inputDate").value
  };

  itemList.push(item);
  window.localStorage.setItem(ITEMS, JSON.stringify(itemList));
  postJsonData();
};

/*------------------------ UPDATE LIST ------------------------*/
let deleteItem = (index) => {
  itemList.splice(index, 1);
  postJsonData();
};

let prepareDeleteButton = (it) => {
  let deleteButton = document.createElement("input");
  deleteButton.type = "button";
  deleteButton.value = "x";
  deleteButton.addEventListener("click", () => {
    deleteItem(it);
  });

  return deleteButton;
};

let updateList = () => {
  let displayList = document.getElementById("displayList");
  let inputSearch = document.getElementById("inputSearch");

  /*----- REMOVE CHILDS -----*/
  while (displayList.firstChild) {
    displayList.removeChild(displayList.firstChild);
  }

  /*----- MAIN LOOP -----*/
  for (let it in itemList) {
    let div = document.createElement("div");
    let pElement = document.createElement("p");

    let content = document.createTextNode(
      itemList[it].title + " " + itemList[it].description + "\n"
    );

    let deleteButton = prepareDeleteButton(it);

    //FIXME PROBABLY EXISTS ISSUE WITH DISPLAYING - TWO TIMES THE SAME DATA
    if (inputSearch.value === ""
      || itemList[it].title.includes(inputSearch.value)
      || itemList[it].description.includes(inputSearch.value)) {

      let content = document.createTextNode(
        itemList[it].title + " " + itemList[it].description
      );

      pElement.appendChild(content);
    }

    div.appendChild(content);
    div.appendChild(deleteButton);
    displayList.appendChild(div);
    // displayList.appendChild(pElement);
  }
};

/*------------------------ FUNCTION CALL ------------------------*/
// initData();
setInterval(updateList, 1000);
getJsonData();

/*----- LOCAL STORAGE DO NOT DELETE -----*/
// let initData = () => {
//   let jsonList = window.localStorage.getItem(ITEMS);
//
//   if (jsonList != null) {
//     itemList = JSON.parse(jsonList);
//   } else {
//     itemList.push(
//       {
//         title: "Learn JS",
//         description: "Create a demo application for my TODO's",
//         place: "445",
//         dueDate: new Date(2019, 10, 16)
//       },
//       {
//         title: "Lecture test",
//         description: "Quick test from the first three lectures",
//         place: "F6",
//         dueDate: new Date(2019, 10, 17)
//       }
//     );
//   }
// };
