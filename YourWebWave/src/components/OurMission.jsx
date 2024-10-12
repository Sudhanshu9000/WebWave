import React, {useState} from 'react'
import CryptoJS from 'crypto-js';

const OurMission = () => {
    const [isDecrypted, setIsDecrypted] = useState(false);

    const message = "❝Our mission is to bring your ideas to life by creating beautiful, responsive, and user-friendly websites that not only look amazing but also function seamlessly. We are passionate about helping businesses grow online, and we believe every website should tell a unique story, reflecting the heart of your brand. With a focus on creativity, innovation, and attention to detail, we build websites that leave lasting impressions and drive real results. Whether you're a startup or an established business, our goal is to be your partner in creating a powerful digital presence that you and your customers will love.❞";
    const encryptedMessage = CryptoJS.AES.encrypt(message, 'secret-key').toString();
    const decryptedMessage = CryptoJS.AES.decrypt(encryptedMessage,'secret-key').toString(CryptoJS.enc.Utf8);

    const toggleMessage = () => {
        setIsDecrypted(!isDecrypted);
    }

    return (
        <div className='flex flex-col items-center min-h-screen'>
            <h1 className='text-center font-bold text-white text-3xl pt-4'>OUR MISSION</h1>
            <div className='bg-white w-[60rem] h-[30rem] mt-4 flex justify-center items-center rounded'>
                <div className='w-[54rem] h-[26rem] mt-4 relative'>
                    <video className='w-full h-full object-cover' loop autoPlay muted>
                        <source src='Videos/program.mp4' type='video/mp4' />
                    </video>
                    <div className='absolute inset-0 flex justify-center items-center bg-black opacity-80'>
                        <h1 
                        className={`text-center font-bold p-4 m-4 ${
                                isDecrypted ? 'bg-blue-500 text-white text-xl' :  ' bg-green-500 text-white' 
                        }`}
                        style={{
                          maxWidth: '90%',
                          wordWrap: 'break-word' ,
                          border: '2px solid',
                      }}
                        > 
                        {isDecrypted ? decryptedMessage : encryptedMessage}
                        </h1>
                    </div>
                </div>
            </div>
            <button onClick={toggleMessage} className='mt-4 px-4 py-2 bg-slate-900 hover:bg-slate-700 text-white text-xl font-medium rounded flex justify-center items-center'>
                {isDecrypted ? 'Encrypt Message' : 'Decrypt Message'}
            </button>
        </div>
    )
}

export default OurMission
