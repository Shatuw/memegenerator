import React from 'react'

export default function Textinput({ input1, setInput1, input2, setInput2 }) {

    //console.log(input1);
    return (
    <div>
        <input
            className='
                my-4
                block 
                w-full 
                rounded-md 
                border-2 
                py-1.5 
                pl-7 
                pr-20 
                text-gray-900 
                ring-1 
                ring-inset 
                ring-gray-300 
                placeholder:text-gray-400 
                focus:ring-2 focus:ring-inset 
                focus:ring-indigo-600 
                sm:text-sm 
                sm:leading-6'
            typeof='text'
            onChange={(e) => setInput1(e.target.value)}
            value={input1}
            id='inputField1'
        />
        <input
            className='
                my-4
                block 
                w-full 
                rounded-md 
                border-2 
                py-1.5 
                pl-7 
                pr-20 
                text-gray-900 
                ring-1 
                ring-inset 
                ring-gray-300 
                placeholder:text-gray-400 
                focus:ring-2 focus:ring-inset 
                focus:ring-indigo-600 
                sm:text-sm 
                sm:leading-6'
            typeof='text'
            onChange={(e) => setInput2(e.target.value)}
            value={input2}
            id='inputField2'
        />
    </div>    
    )
}
