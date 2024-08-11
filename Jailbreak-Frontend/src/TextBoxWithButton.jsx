import React, { useState } from 'react';
import axios from 'axios';

const TextBoxWithButton = () => {
  const [inputText, setInputText] = useState('');
  const [resultText, setResultText] = useState('');
  const [backendURL, setBackendURL] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleIPChange = (e) => {
    setBackendURL(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(backendURL, { message: inputText });
      console.log(response);
      setResultText(response.data);
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  return (
    <div>
      <h1>Unleah Your Creativity</h1>
      <textarea 
        value={inputText} 
        onChange={handleInputChange} 
        placeholder="Write your sentence here..."
        rows="4"
        cols="50"
      />
      <br />
      <textarea 
        value={backendURL} 
        onChange={handleIPChange} 
        placeholder="Write Backend URL here..."
        rows="1"
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>
      <br />
      <textarea 
        value={resultText} 
        readOnly 
        placeholder="Result will be displayed here..."
        rows="100"
        cols="50"
      />
    </div>
  );
};

export default TextBoxWithButton;