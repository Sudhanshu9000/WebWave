import React from 'react';

const SocialIcons = () => {
  return (
    <div className="flex space-x-4">
      <a href="https://twitter.com" className="bg-blue-700 hover:bg-blue-900 text-white rounded-full p-3 flex items-center justify-center w-9 h-9">
        <i className="fab fa-twitter text-xl"></i>
      </a>
      <a href="https://linkedin.com" className="bg-blue-700 hover:bg-blue-900 text-white rounded-full p-3 flex items-center justify-center w-9 h-9">
        <i className="fab fa-linkedin-in text-xl"></i>
      </a>
      <a href="https://instagram.com" className="bg-blue-700 hover:bg-blue-900 text-white rounded-full p-3 flex items-center justify-center w-9 h-9">
        <i className="fab fa-instagram text-xl"></i>
      </a>
    </div>
  );
}

export default SocialIcons;