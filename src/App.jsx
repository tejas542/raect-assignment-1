import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  const characterCount = text.length;
  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  return (
    <div>
      <h2>Live Character Counter</h2>

      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <p>Text: {text}</p>
      <p>Characters: {characterCount}</p>
      <p>Words: {wordCount}</p>
    </div>
  );
}

export default App;