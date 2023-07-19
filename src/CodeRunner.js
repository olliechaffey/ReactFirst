import React, { useState, useEffect, useRef } from 'react';
import AceEditor from 'react-ace';

import 'brace/mode/python';
import 'brace/theme/github';

const defaultCode = `# Enter your Python code here
print("Hello, World!")`;

const CodeRunner = () => {
  const [code, setCode] = useState(defaultCode);
  const [output, setOutput] = useState('');
  const brythonInitialized = useRef(false);

  useEffect(() => {
    if (!brythonInitialized.current) {
      const scriptElement = document.createElement('script');
      scriptElement.src = 'https://cdnjs.cloudflare.com/ajax/libs/brython/3.9.10/brython.min.js';
      scriptElement.onload = initializeBrython;
      document.body.appendChild(scriptElement);
      brythonInitialized.current = true;
    }
  }, []);

  const initializeBrython = () => {
    window.__BRYTHON__.stdout = (text) => {
      setOutput((prevOutput) => prevOutput + text);
    };
    window.__BRYTHON__.brython({ debug: 1, indexedDB: false }).then(() => {
      window.__BRYTHON__.run(() => {
        runCode(); // Automatically execute the default code after Brython is initialized
      });
    });
  };

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

  const runCode = () => {
    setOutput(''); // Clear previous output
    window.__BRYTHON__.run_script(code, '__main__');
  };

  return (
    <div>
      <AceEditor
        mode="python"
        theme="github"
        onChange={handleCodeChange}
        value={code}
        fontSize={14}
        height="300px"
        width="100%"
      />
      <button onClick={runCode}>Run</button>
      <pre>{output}</pre>
    </div>
  );
};

export default CodeRunner;
