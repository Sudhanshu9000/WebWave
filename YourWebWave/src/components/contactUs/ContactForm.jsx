import React, { useState, useEffect } from 'react';
import FormField from './FormField';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const ContactForm = () => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [location, setLocation] = useState({ lat: 0, lng: 0 });

  const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
  const googleMapsApiKey = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAOVYRIgupAurZup5y1PRh8Ismb1A3lLao&libraries=places&callback=initMap'; 

  useEffect(() => {
    // Fetch countries
    fetch(`https://api.countrystatecity.in/v1/countries`, {
      headers: {
        'X-CSCAPI-KEY': apiKey
      }
    })
      .then(response => response.json())
      .then(data => {
        const countryNames = data.map(country => country.name);
        countryNames.sort((a, b) => a.localeCompare(b));
        setCountries(countryNames);
      })
      .catch(error => console.error('Error fetching countries:', error));
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      // Fetch states for the selected country
      fetch(`https://api.countrystatecity.in/v1/countries/${selectedCountry}/states`, {
        headers: {
          'X-CSCAPI-KEY': apiKey
        }
      })
        .then(response => response.json())
        .then(data => {
          const stateNames = data.map(state => state.name);
          setStates(stateNames);
        })
        .catch(error => console.error('Error fetching states:', error));
    }
  }, [selectedCountry]);

  useEffect(() => {
    if (selectedState) {
      // Fetch cities for the selected state
      fetch(`https://api.countrystatecity.in/v1/countries/${selectedCountry}/states/${selectedState}/cities`, {
        headers: {
          'X-CSCAPI-KEY': apiKey
        }
      })
        .then(response => response.json())
        .then(data => {
          const cityNames = data.map(city => city.name);
          setCities(cityNames);
        })
        .catch(error => console.error('Error fetching cities:', error));
    }
  }, [selectedState]);

  useEffect(() => {
    if (selectedCity) {
      // Fetch coordinates for the selected city
      fetch(`https://api.opencagedata.com/geocode/v1/json?q=${selectedCity},${selectedState},${selectedCountry}&key=YOUR_OPENCAGE_API_KEY`)
        .then(response => response.json())
        .then(data => {
          if (data.results.length > 0) {
            const { lat, lng } = data.results[0].geometry;
            setLocation({ lat, lng });
          }
        })
        .catch(error => console.error('Error fetching location:', error));
    }
  }, [selectedCity]);

  const formFields = [
    {
      label: 'Country',
      id: 'country',
      type: 'select',
      options: countries,
      onChange: (e) => setSelectedCountry(e.target.value),
    },
    {
      label: 'State',
      id: 'state',
      type: 'select',
      options: states,
      onChange: (e) => setSelectedState(e.target.value),
    },
    {
      label: 'City',
      id: 'city',
      type: 'select',
      options: cities,
      onChange: (e) => setSelectedCity(e.target.value),
    },
    { label: 'Name', id: 'name', type: 'text', placeholder: 'Your name' },
    { label: 'Email', id: 'email', type: 'email', placeholder: 'Your email' },
    { label: 'Message', id: 'message', type: 'textarea', placeholder: 'Your message' },
  ];

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
      <form>
        {formFields.map((field, index) => (
          <FormField key={index} {...field} />
        ))}
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

const MapSection  = ({ location, googleMapsApiKey}) => (
  <div className="mt-6">
  <LoadScript googleMapsApiKey={googleMapsApiKey}>
    <GoogleMap
      mapContainerStyle={{ width: '100%', height: '300px' }}
      center={location}
      zoom={10}
    >
      <Marker position={location} />
    </GoogleMap>
  </LoadScript>
</div>
);

export {ContactForm, MapSection };