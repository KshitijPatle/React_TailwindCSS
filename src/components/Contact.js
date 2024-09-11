import React from 'react'

const Contact = () => {
  return (
    <div>
      <div>
        <h1 className='font-bold text-3xl p-4 m-4'>Contact Us</h1>
        <form>
          <input type="text" className='border border-black p-1 m-2 rounded-lg' placeholder='Name'/>
          <input type="text" className='border border-black p-1 m-2 rounded-lg' placeholder='Message'/>
          <button className='border border-black p-1 m-2 rounded-lg font-bold bg-gray-400'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact

