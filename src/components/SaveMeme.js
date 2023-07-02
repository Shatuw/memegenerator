import React from 'react'
import domtoimage from 'dom-to-image';
//import { saveAs } from 'file-saver';

//try next ? : https://dev.to/lico/react-download-html-element-as-an-image-file-53ok

export default function SaveMeme({ memeRef }) {

    //console.log(memeRef); //checked

    const downloadMeme = async () => {
        const obj = await domtoimage.toBlob(() => memeRef)
        console.log(obj);
        // .then((blob) => {
        //     window.saveAs(blob, 'my-meme.png');
        // });
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
            save meme
        </button>
    )
}
