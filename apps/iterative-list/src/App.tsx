import React, { useEffect, useState } from "react";
import "./App.css";
import { IFiles, getFiles } from "./api/filesApi";
import { EntryFile } from "./components/EntryFile";

function App() {
  const [files, setFiles] = useState<IFiles>();

  useEffect(() => {
    getFiles().then((data) => {
      setFiles(data);
    });
  }, []);

  return (
    <div className="App">
      {files?.children.map((entry) => (
        <EntryFile entry={entry} depth={1} />
      ))}
    </div>
  );
}

export default App;
