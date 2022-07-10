import React from 'react';
import ReactDOM from 'react-dom/client';
import './app_styles.css';

class MarkdownPreviewer extends React.Component {
  render() {
    return (
      <div id="app">
        <div id="editor-container">
          <div className="container-head">Editor</div>
          <textarea id="editor"></textarea>
        </div>
        <div id="preview-container">
          <div className="container-head">Preview</div>
          <div id="preview" />
        </div>
      </div>
    );
  }
}

const container = ReactDOM.createRoot(document.getElementById('app-container'));
container.render(<MarkdownPreviewer/>);
