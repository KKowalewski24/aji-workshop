"use strict";

/*------------------------ VARIABLE ------------------------*/
const FIREBASE_LINK = "https://schedulelist-d5850.firebaseio.com/.json";
const FIREBASE_KEY = "ihKtSAJNoNNsSLI4rdiVCcub5PuMeY5eIqnLGXpR";
const FIREBASE_ACCESS_LINK = FIREBASE_LINK + "?auth=" + FIREBASE_KEY;

const inputTitle = $("#inputTitle");
const inputDescription = $("#inputDescription");
const inputPlace = $("#inputPlace");
const inputDate = $("#inputDate");
const inputSearch = $("#inputSearch");
const itemTable = $("#itemTable").find("tbody");

let itemList = [];

/*------------------------ GET | POST ------------------------*/
let getJsonData = () => {
  $.ajax({
    url: FIREBASE_ACCESS_LINK,
    type: 'GET',
    success: (data) => {
      //PROTECT FROM ERROR - ASSIGNING NULL TO itemList
      if (data != null) {
        itemList = data;
        updateList();
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
    url: FIREBASE_ACCESS_LINK,
    type: 'PUT',
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

/*------------------------ CLEAR ADD ITEM FORM ------------------------*/
let clearInputs = (...elements) => {
  elements.forEach(it => $(it).val(""));
};

/*------------------------ ADD ITEM ------------------------*/
let addItem = () => {
  let item = {
    title: inputTitle.val(),
    description: inputDescription.val(),
    place: inputPlace.val(),
    dueDate: inputDate.val()
  };

  clearInputs(inputTitle, inputDescription, inputPlace, inputDate);

  itemList.push(item);
  postJsonData();
  updateList();
};

/*------------------------ UPDATE LIST ------------------------*/
let deleteItem = (index) => {
  itemList.splice(index, 1);
  postJsonData();
  updateList();
};

let updateList = () => {
  /*----- jQuery VERSION OF REMOVING FIRST CHILD -----*/
  itemTable.empty();

  let searchItemList = [];

  let pattern = inputSearch.val();

  for (let it in itemList) {
    if (pattern == "" ||
      (itemList[it].title.includes(pattern)) ||
      (itemList[it].description.includes(pattern))) {
      searchItemList.push(itemList[it]);
    }
  }

  for (let it in searchItemList) {
    itemTable.append(
      "<tr>" +
      "<td>" + searchItemList[it].title + "</td>" +
      "<td>" + searchItemList[it].description + "</td>" +
      "<td>" + searchItemList[it].place + "</td>" +
      "<td>" + searchItemList[it].dueDate + "</td>" +
      "<td>" +
      "<input class='btn text-capitalize' type='button' value='delete' onclick='deleteItem(" + it + ")'/>" +
      "</td>" +
      "</tr>"
    );
  }

};

/*------------------------ FUNCTION CALL ------------------------*/
getJsonData();
