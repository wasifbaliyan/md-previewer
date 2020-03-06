import React from "react";
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
`;

class App extends React.Component {
  state = {
    text: initialState
  };
  handleChange = e => {
    this.setState({ text: e.target.value });
  };
  render() {
    const { text } = this.state;
    const markdown = marked(text, { breaks: true });
    return (
      <div className="container">
        <h1 className="m-4 text-center">Markdown Previewer</h1>
        <div className="row ">
          <div className="col col-lg-6">
            <h6>Enter Markdown here:</h6>
            <textarea
              className="preview"
              onChange={this.handleChange}
              value={text}
              id="editor"
            />
          </div>
          <div className="col col-lg-6 my-3 ">
            <h6>See the result:</h6>
            <div
              className="preview"
              id="preview"
              dangerouslySetInnerHTML={{ __html: markdown }}
            ></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
