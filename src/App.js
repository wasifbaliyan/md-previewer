import React, { useState } from "react";
import marked from "marked";
import "./App.css";

const initialState = `
  This is a paragraph

  **This is bolded text**

  > Block Quotes!

  # Heading
  ## Heading 2

  - list item 1
  - list item 2
  - list item 3


  [Twitter](https://twitter.com/wasifbaliyan)

  This is a inline \`<div></div>\`
  This is a block of code:

  \`\`\`
    let x = 1;
    let y = 2;
    let z = x + y;
  \`\`\`

  ![React](https://robohash.org/adjfas?size=150x150)


© wasifbaliyan 
`;

export default function App() {
  const [text, setText] = useState(initialState);
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const markdown = marked(text, { breaks: true });

  return (
    <div className="container">
      <h1 style={{ fontWeight: "300" }} className="m-5 text-center">
        Markdown Previewer
      </h1>
      <div className="row ">
        <div className="col-sm-12 col-lg-6 ">
          <h3 style={{ fontWeight: "300" }}>Enter Markdown here:</h3>
          <textarea
            style={{ width: "100%" }}
            className="preview px-3 shadow-lg"
            onChange={handleChange}
            value={text}
            id="editor"
          />
        </div>
        <div className="col-sm-12 col-lg-6">
          <h3 style={{ fontWeight: "300" }}>See the result:</h3>
          <div
            className="preview p-5 shadow-lg"
            id="preview"
            dangerouslySetInnerHTML={{ __html: markdown }}
          ></div>
        </div>
      </div>
    </div>
  );
}
