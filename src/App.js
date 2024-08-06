import React, { useEffect, useState } from "react";
import { marked } from "marked";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

const App = () => {
  const [markdown, setMarkdown] = useState('');

  // Load the placeholder markdown file to display
  useEffect(() => {
    fetch("/placeholder.md")
      .then((response) => response.text())
      .then((text) => setMarkdown(text))
      .catch((err) => console.error("Error fetching the markdown file:", err));
  }, []);

  const handleInputChange = (e) => {
    setMarkdown(e.target.value);
  };
  
  // Configure marked with options to handle line breaks and GFM
  marked.use({
    gfm: true, // Enable GitHub Flavored Markdown
    breaks: true, // Allows for line breaks in Markdown
  });

  return (
    <div className="container">
      <h1 className="text-center">Markdown Previewer</h1>
      <p className="text-center">By Joshua McNeel</p>
      <div className="row">
        <div className="col-md-6 textarea-container">
          <textarea
            id="editor"
            className="form-control"
            rows="15"
            value={markdown}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-6 preview-container">
          <div
            id="preview"
            className="preview"
            dangerouslySetInnerHTML={{ __html: marked(markdown) }}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
