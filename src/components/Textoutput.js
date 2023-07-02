import React from 'react'
import Draggable from 'react-draggable';

export default function Textoutput({input1, input2}) {
  return (
    <>
    <Draggable>
    <p className='absolute top-24 left-12 text-3xl overflow-hidden font-bold w-2/5 text-gray-100'>
        {input1}
    </p>
    </Draggable>
    <Draggable>
    <p className='absolute bottom-24 left-12 text-3xl font-black w-2/5 overflow-hidden text-gray-100'>
        {input2}
    </p>
    </Draggable>
    </>
  )
}
