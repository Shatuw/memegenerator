import React from 'react'

export default function BrowseMemes({setActualMeme, setMemeUrl, actualMeme, memeArray}) {
    const previousMeme = () => {
        setActualMeme(prev => prev = prev - 1);
        setMemeUrl(memeArray[actualMeme - 1].url);
    }
    const nextMeme = () => {
        setActualMeme(prev => prev = prev + 1);
        setMemeUrl(memeArray[actualMeme + 1].url);
    }


  return (
    <div className='p-2'>
                <button
                    className='bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded'
                    onClick={previousMeme}
                    disabled={actualMeme <= 0}
                >
                    Previous
                </button>
                <span className='py-2 px-4 border border-blue-500 text-blue-700 font-semibold'>{actualMeme + 1}/{memeArray.length}</span>
                <button
                    className='bg-transparent hover:bg-blue-500 font-semibold text-blue-700 hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
                    onClick={nextMeme}
                    disabled={actualMeme >= memeArray.length}
                >
                    Next
                </button>
            </div>
  )
}
