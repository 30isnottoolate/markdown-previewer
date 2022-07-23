import React from 'react';
import ReactDOM from 'react-dom/client';
import MarkdownPreviewer from './MarkdownPreviewer';

const container = ReactDOM.createRoot(document.getElementById('app-container'));
container.render(
  <React.StrictMode>
    <MarkdownPreviewer />
  </React.StrictMode>
);
