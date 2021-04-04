import React, { useState } from 'react'

const IndexPage = () => {
  const [color, setColor] = useState<'red' | 'green'>('red')

  return (
    <div className="flex flex-col w-full space-y-10">
      <p className={`text-${color}-500 text-3xl`}>I am colored text</p>

      <div className={`w-full h-20 bg-${color}-500`}>
        <p className="text-xl text-gray-900">I am colored div</p>
      </div>

      <div className="flex">
        <button
          type="button"
          onClick={() => {
            setColor('red')
          }}
          className="inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Set Color Red
        </button>
        <button
          type="button"
          onClick={() => {
            setColor('green')
          }}
          className="inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Set Color Green
        </button>
      </div>
    </div>
  )
}

export default IndexPage
