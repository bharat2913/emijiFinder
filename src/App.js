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
  "😑": "annoyance",
  "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "🙂": "Slightly Smiling Face",
  "🙃": "Upside-Down Face",
  "😉": "Winking Face",
  "😇": "Smiling Face with Halo",
  "🥰": "Smiling Face with Hearts",
  "😍": "Smiling Face with Heart-Eyes",
  "🤩": "Star-Struck",
  "😘": "Face Blowing a Kiss",
  "😗": "Kissing Face",
  "☺️": "Smiling Face",
  "😚": "Kissing Face with Closed Eyes",
  "😙": "Kissing Face with Smiling Eyes"
};
var emojiweknow = Object.keys(emojiDictionary);

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
  function emojiClickHandler(emoji) {
    // processing
    var meaning = emojiDictionary[emoji];
    setMeaningInput(meaning); // react call to show output
  }

  return (
    <div className="App">
      <h1>Emoji Detect</h1>

      {emojiweknow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "1rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}

      <input
        placeholder="Click or Enter one of these emojis to get meaning "
        onChange={emojiInputHandler}
      ></input>

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
