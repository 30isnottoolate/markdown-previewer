import React from 'react';
import ReactDOM from 'react-dom/client';
import './app_styles.css';
import { marked } from 'marked';

class MarkdownPreviewer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      markdown: "## This is a sub-heading."
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      markdown: e.target.value
    });
  }
  render() {
    return (
      <div id="app">
        <div id="editor-container">
          <div className="container-head">Editor</div>
          <textarea id="editor" onChange={this.handleChange} value={this.state.markdown}></textarea>
        </div>
        <div id="preview-container">
          <div className="container-head">Preview</div>
          <div id="preview" dangerouslySetInnerHTML={{ __html: marked.parse(this.state.markdown) }} />
        </div>
      </div>
    );
  }
}

const container = ReactDOM.createRoot(document.getElementById('app-container'));
container.render(<MarkdownPreviewer/>);
