import React from "react";
import { ContactForm, MapSection } from "./contactUs/ContactForm";
import GetInTouch from "./contactUs/GetInTouch";

const ContactPage = () => {
        const location = { lat: 0, lng: 0 }; // Default location, update as needed
        const googleMapsApiKey = 'YOUR_GOOGLE_MAPS_API_KEY'; // Replace with your Google Maps API key
    
        return (
        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8 p-8">
        <div className="w-full md:w-1/2">
        <ContactForm/>
        </div>
        
        <div className="w-full md:w-1/2">
        <MapSection location={location} googleMapsApiKey={googleMapsApiKey} />
        <div className="mt-4 ">
        <GetInTouch/>
        </div>
        
        </div>

        </div>
    )
}

export default ContactPage;