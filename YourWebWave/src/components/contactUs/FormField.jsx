import React from 'react';
const FormField = ({ label, id, type, placeholder, options}) => (
    <div className='mb-4 relative'>
        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor={id}>
            {label}
        </label>
        {type === 'select' ? (
            <div className='relative'>
                <select 
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                id={id}
                >
                    {options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
          </svg>
        </div>
      </div>
        ): type === 'textarea' ? (
            <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={id}
        rows="4"
        placeholder={placeholder}
      ></textarea>
    ) : (
        <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={id}
        type={type}
        placeholder={placeholder}
      />
    )}
            </div>
        
);

export default FormField;