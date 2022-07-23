import React from 'react';
import './MarkdownPreviewer.css';
import { marked } from 'marked';

marked.setOptions({
  breaks: true
});

let defaultText = `# This is a Markdown Previewer!

---

## This is a sub-heading.

Heres some code, \`<html></html>\`, between 2 backticks.

\`\`\`
// some multi-line code:

for (let i = 0; i < arr.length; i++) {
    let obj = {};
    obj.name = arr[i].name;
    obj.orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(arr[i].avgAlt + earthRadius, 3) / GM));
    newArr.push(obj);
}
\`\`\`

> He turned round. It was his friend Syme, who worked in the Research Department. Perhaps ‘friend’ was not exactly the right word. You did not have friends nowadays, you had comrades: but there were some comrades whose society was pleasanter than that of others.

Things I like:
1. good food
2. good music
3. undisturbed sleep

This is a _picture_ of a **northern bald ibis**. See, you're not that ugly:

![northern bald ibis](https://live.staticflickr.com/65535/48875704498_461dc8d5ed_b.jpg)

This is a link to [Google](https://www.google.com).
## Don't forget, they're watching you.
`

class MarkdownPreviewer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      markdown: defaultText
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      markdown: e.target.value
    });
  }
  render() {

    const parseMarkDown = (input) => {
      return { __html: marked.parse(input) };
    }

    return (
      <div id="app">
        <div id="editor-container">
          <div className="container-head">Editor</div>
          <textarea id="editor" onChange={this.handleChange} value={this.state.markdown}></textarea>
        </div>
        <div id="preview-container">
          <div className="container-head">Preview</div>
          <div id="preview" dangerouslySetInnerHTML={parseMarkDown(this.state.markdown)} />
        </div>
      </div>
    );
  }
}

export default MarkdownPreviewer;
