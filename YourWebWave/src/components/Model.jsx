import React from 'react';

const Modal =({isOpen, onClose, children})=>{
  if(!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full p-10 relative">
            <button className="absolute top-2 right-2 bg-slate-300 hover:bg-slate-600  rounded-full p-1" onClick={onClose}>
                <svg
                 xmlns="http://www.w3.org/2000/svg"
                 className='h-6 w-6 text-gray-600 hover:text-white'
                 fill='none'
                 viewBox='0 0 24 24'
                 stroke='currentColor'
                >
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            {children}
        </div>
    </div>
  )
}

export default Modal