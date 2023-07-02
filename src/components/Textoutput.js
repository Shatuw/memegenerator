import React from 'react'
// libary from: https://www.npmjs.com/package/react-draggable
import Draggable from 'react-draggable';

export default function Textoutput({input1, input2}) {
  return (
    <>
    <Draggable>
    <p className='absolute top-24 left-12 text-3xl overflow-hidden font-bold w-full text-gray-100'>
        {input1}
    </p>
    </Draggable>
    <Draggable>
    <p className='absolute bottom-24 left-12 text-3xl font-black w-full overflow-hidden text-gray-100'>
        {input2}
    </p>
    </Draggable>
    </>
  )
}
