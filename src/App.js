import React, { useState } from "react";
import "./styles.css";

// var username = prompt("Enter Username");

// var shoppingList = ["Bread", "eggs", "flower", "wood"];
var emojiDictionary = {
  "😊": "smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance"
};

export default function App() {
  const [meaning, setMeaningInput] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we do not have this in our database";
    }

    setMeaningInput(meaning);

    // console.log(event.target.value)
  }

  // function getBG(index) {
  //   if (index % 2 === 0) {
  //     return "white";
  //   }
  //   return "grey";
  // }

  // function listClickItenHandler(item) {
  //   console.log("Clicked", item);
  // }

  return (
    <div className="App">
      <input onChange={emojiInputHandler}></input>
      <div> {meaning}</div>

      {/* <ul>
        {shoppingList.map(function (item, index) {
          return (
            <li
              key={item}
              onClick={() => listClickItenHandler(item)}
              style={{ backgroundColor: getBG(index) }}
            >
              {item}
            </li>
          );
        })}
      </ul> */}
    </div>
  );
}
