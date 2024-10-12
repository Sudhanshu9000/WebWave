import React, {useState} from 'react';
import packages from './packageData';

const SubscriptionPackage = () => {
 const [selctedPackage, setSelectedPackage] = useState('Basic');

    return(
        <div className='max-w-md mx-auto bg-white p-6 rounded-lg shadow-md'>
            <div className='flex  mb-4'>
                {Object.keys(packages).map((pkg)=>(
                    <button 
                    key={pkg}
                    className={`flex-1 px-4 py-2  ${selctedPackage === pkg ? 'bg-blue-600 text-white' : 'bg-gray-200'} focus:outline-none`}
                    style={{boxShadow: '0 0 0 0.5px rgba(0, 0, 0, 0.3)'}}
                    onClick={() => setSelectedPackage(pkg)}
                    >
                        {pkg}
                    </button>
                ))}
            </div>
            <div>
                <h2 className='text-xl font-bold'>{packages[selctedPackage].price}</h2>
                <p className='mt-2'>{packages[selctedPackage].description}</p>
                <div className='flex justify-between mt-4'>
                    <span>{packages[selctedPackage].delivery}</span>
                    <span>{packages[selctedPackage].revisions}</span>
                </div>
                <button className='mt-4 w-full bg-blue-600 text-white py-2 rounded'>Request to order</button>
            </div>
        </div>
    )
}

export default SubscriptionPackage;