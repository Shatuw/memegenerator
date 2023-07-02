import React, { useEffect } from 'react'

export default function Memepic({ memeUrl, setMemeUrl, setMemeArray, setActualMeme,memeRef }) {
    const getMemePics = async () => {
        try {
            await fetch("https://api.imgflip.com/get_memes")
                .then(res => res.json())
                .then((obj) => {
                    setMemeArray(obj.data.memes)
                    setMemeUrl(obj.data.memes[0].url)
                });
        } catch (error) {
            console.log(error);
        }

    };//end of getMemeUrl-func

    useEffect(() => {
        getMemePics();
        setActualMeme(0);

    }, []);//end of useEffect

    return (
        
        <img
            className='max-w-xl w-full p-2'
            src={memeUrl}
            alt="meme" 
        />
    );
};//end of Memepic-component
