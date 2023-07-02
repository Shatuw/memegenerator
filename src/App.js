// WBS Exercise Modul 7: create Meme-generator 
// done with Tailwind-css: https://tailwindcss.com/docs
// get an image-uploaded and convert into url: https://www.youtube.com/watch?v=xXrs4j-p3yE 
// or more detailed?: https://www.youtube.com/watch?v=EaBSeNSc-2c
// and external libary: https://www.npmjs.com/package/dom-to-image

import React, { useState, useRef } from "react";
import Memepic from './components/Memepic';
import Textinput from './components/Textinput';
import Textoutput from './components/Textoutput';
import UserImport from './components/UserImport';
import BrowseMemes from "./components/BrowseMemes";
import SaveMeme from "./components/SaveMeme";

function App() {
  
  const [input1, setInput1] = useState('Your funny text');
  const [input2, setInput2] = useState('Your other funny text');
  const [memeUrl, setMemeUrl] = useState("");
  const [memeArray, setMemeArray] = useState([]);
  const [actualMeme, setActualMeme] = useState(0);
  const memeRef = useRef();

  return (
    <div className='m-0 py-10 w-full h-screen overflow-auto bg-gradient-to-r from-gray-300 to-gray-400'>
      <div className='container'>
        <h1
          className='text-5xl font-serif font-bold text-blue-500 text-center underline'
        >
          Memegenerator
        </h1>
        <div className="flex justify-between flex-wrap">
          <div className="mt-10">
            <p>Select the another Picture:</p>
            <BrowseMemes
              setActualMeme={setActualMeme}
              setMemeUrl={setMemeUrl}
              actualMeme={actualMeme}
              memeArray={memeArray}
            />
            <p>Inser your Text here:</p>
            <Textinput
              input1={input1}
              setInput1={setInput1}
              input2={input2}
              setInput2={setInput2}
            />
            <p>Upload your own picture:</p>
            <UserImport setMemeUrl={setMemeUrl} />
            <p>Save your meme:</p>
            <SaveMeme 
              memeRef={memeRef}  
            />
          </div>
          <div className='container fixedWidth overflow-hidden border-0 mt-10 relative' id='memeContainer'>
            <Memepic
              memeUrl={memeUrl}
              setMemeUrl={setMemeUrl}
              setMemeArray={setMemeArray}
              setActualMeme={setActualMeme}
              memeRef={memeRef}
            />
            <Textoutput input1={input1} input2={input2} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
