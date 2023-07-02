import React from 'react'


export default function UserImport({ setMemeUrl }) {

    const fileSave = (e) => {
        console.log(URL.createObjectURL(e.target.files[0]));
        setMemeUrl(URL.createObjectURL(e.target.files[0]))
    };//end func fileSave

    return (
        <form id="uploadForm">
            <input
                onChange={fileSave}
                accept='image/*'
                type="file"
                className="p-2 block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-violet-50 file:text-violet-700
                    hover:file:bg-violet-100"
            />
            {/* <button
                className='p-2 block w-full text-md text-slate-500 
                    hover:bg-violet-100 text-violet-700 bg-violet-50 rounded-full'
            >
                Upload
            </button> */}
        </form>
    ) 
}
