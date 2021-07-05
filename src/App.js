import React, { useState } from "react";

import RichEditor from "./RichEditor";
import ReadOnly from "./ReadOnly";

const App = () => {
  const [input, setInput] = useState(initialValue);
  console.log(JSON.stringify(input));
  return (
    <div>
      <RichEditor value={input} setValue={setInput} />
      <ReadOnly initialValue={initialValue} />
    </div>
  );
};

export default App;

const initialValue = [
  {
    type: "paragraph",
    children: [
      { text: "This is editable " },
      { text: "rich", bold: true },
      { text: " text, " },
      { text: "much", italic: true },
      { text: " better than a " },
      { text: "<textarea>", code: true },
      { text: "!" }
    ]
  },
  {
    type: "paragraph",
    children: [
      {
        text:
          "Since it's rich text, you can do things like turn a selection of text "
      },
      { text: "bold", bold: true },
      {
        text:
          ", or add a semantically rendered block quote in the middle of the page, like this:"
      }
    ]
  },
  {
    type: "block-quote",
    children: [{ text: "A wise quote." }]
  },
  {
    type: "paragraph",
    children: [{ text: "Try it out for yourself!" }]
  }
];
