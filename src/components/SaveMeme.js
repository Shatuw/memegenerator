import React from 'react'
import domtoimage from 'dom-to-image';
//import { saveAs } from 'file-saver';

export default function SaveMeme({memeRef}) {

    //console.log(memeRef); //checked

const downloadMeme = () => {
    domtoimage.toBlob(memeRef)
    .then((blob) => {
        window.saveAs(blob, 'my-meme.png');
    });
};//end func downloadMeme

    return (
        <button
        onClick={downloadMeme}
            className="p-2 block w-full
                rounded-full border-0
                text-sm font-semibold
                bg-violet-50 text-violet-700
                hover:bg-violet-100"
        >
            Save meme
        </button>
    )
}
