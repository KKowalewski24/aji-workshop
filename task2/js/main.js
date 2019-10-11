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
      //PROTECT FROM ERROR - ASSIGNING NULL TO itemList
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
    title: $("#inputTitle").val(),
    description: $("#inputDescription").val(),
    place: $("#inputPlace").val(),
    dueDate: $("#inputDate").val()
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
  let deleteButton = $("<input type='button' value='x'/>");
  deleteButton.click(() => {
    deleteItem(it);
  });

  return deleteButton;
};

let updateList = () => {
  let displayList = $("#displayList");
  let inputSearch = $("#inputSearch");

  displayList.empty();

  /*----- MAIN LOOP -----*/
  for (let it of itemList) {
    let div = $("<div/>");
    let pElement = $("<p/>");

    let content = document.createTextNode(
      it.title + " " + it.description + "\n"
    );

    let deleteButton = prepareDeleteButton(it);

    //FIXME PROBABLY EXISTS ISSUE WITH DISPLAYING - TWO TIMES THE SAME DATA
    if (inputSearch.value === ""
      || it.title.includes(inputSearch.value)
      || it.description.includes(inputSearch.value)) {

      let content = document.createTextNode(
        it.title + " " + it.description
      );

      pElement.append(content);
    }

    div.append(content);
    div.append(deleteButton);
    displayList.append(div);
    // displayList.append(pElement);
  }
};

/*------------------------ FUNCTION CALL ------------------------*/
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

// JS TO JQUERY
// https://gist.github.com/joyrexus/7307312
