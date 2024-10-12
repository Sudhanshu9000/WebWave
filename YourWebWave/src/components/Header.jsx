import React, {useState} from 'react'

const Header = () => {
  
  return (
    <div className='flex items-center justify-between p-4 ml-14'>
      <img src="/Images/verified.png" alt="Company Logo" 
      style={{height: '80px', width: '100px', borderRadius: '10px'}}
      />
      <div className='flex justify-start space-x-4 py-10 flex-grow ml-10'>
      <button className='px-6  text-white font-bold  text-2xl'>Our Services</button>
      <button className='px-6  text-white font-bold text-2xl'>Our Work</button>
      <button className='px-6  text-white font-bold text-2xl'>Mission</button>
      </div>
      <button className="px-7 py-5 bg-blue-700 text-white rounded mr-14 text-3xl font-bold">Launch Your Website</button>
    </div>
   
  );
}

export default Header

