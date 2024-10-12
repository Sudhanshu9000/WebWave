import React from 'react';

const OurServices = ({ services, onButtonClick }) => {
  
  return (
    <div className='flex flex-col items-center min-h-screen'>
      <h2 className='text-3xl font-bold mb-10 text-center text-white '>Our Services</h2>
      <div className='flex flex-wrap justify-center items-center w-full gap-8'>
        {services.map((service, index) => (
          <div
            key={index}
            className='bg-sky-200 shadow-md rounded-lg p-8 border-r-8 border-lime-400 text-center flex flex-col gap-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4'
          >
            <h2 className='text-xl font-bold mb-2' style={{ flex: '1 1 20%' }}>{service.title}</h2>
            <div className='w-full h-48'>
              <img 
                src={service.image} 
                alt={service.title}
                className='object-cover rounded-md shadow-lg w-full h-full'
              />
            </div>
            <p className='text-gray-700' style={{ flex: '1 1 20%' }}>{service.description}</p>

            <div className='mt-3'>
              <button className='w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-500 hover:text-gray-300'
               onClick={onButtonClick}
              >
                See Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurServices;
