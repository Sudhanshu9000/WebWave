import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import ChatWithMe from './components/ChatWithMe'
import HeroSection from './components/HeroSection'
import OurServices from './components/OurServices'
import { services } from './components/ServicesData'   
import OurMission from './components/OurMission'
import ContactPage from './components/ContactPage'
import SubscriptionPackage from './components/subscriptions/SubscriptionPackage'
import Modal from './components/Model'
import Footer from './components/footer/Footer'
// import WhatsAppIcon from './components/WhatsAppIcon'
import Chatbot from './components/chatBot/Chatbot'

function App() {

  const [showHeroSection, setShowHeroSection] = useState(false);
  const [isModalOpen, setIsModelOpen] = useState(false);
  
  const handleChatComplete = () => {
    setShowHeroSection(true);
  };

  const handleOpenModal = () => {
      setIsModelOpen(true);
  };

  const handleCloseModal =() => {
    setIsModelOpen(false);
  }

  return (
    <>
    <div
        className="h-96 bg-gradient-to-r from-cyan-700 to-blue-500"
    style={{
        height: "36rem"
    }}
         >
        <Header />
        <div className={`transition-opacity duration-1000 ${showHeroSection ? 'opacity-0' : 'opacity-100'}`}>
          {!showHeroSection && <ChatWithMe onComplete={handleChatComplete} />}
        </div>
        <div className={`transition-opacity duration-1000 ${showHeroSection ? 'opacity-100' : 'opacity-0'}`}>
          {showHeroSection && <HeroSection />}
        </div>
     

        {/* {showHeroSection ? <HeroSection/>: <ChatWithMe onComplete={handleChatComplete} />} 
         */}
         </div>
       
       <div className='bg-slate-900 py-8'>
        <OurServices services={services} onButtonClick={handleOpenModal}/>
        </div>
        
        <div className='bg-gradient-to-r from-cyan-700 to-blue-500'>
        <OurMission/>
        </div>

        <div className='bg-slate-900'>
          <ContactPage/>
        </div>


          <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
            <SubscriptionPackage/>
          </Modal>

          <Footer/>

          {/* <WhatsAppIcon/> */}
          <Chatbot/>

    </>
  );
}

export default App
