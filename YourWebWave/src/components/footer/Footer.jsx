import React from "react";
import LinkHeader from "./LinkHeader";
import SocialIcons from "../SocialIcons";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white p-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col items-start mb-6 md:mb-0">
          <img
            src="/Images/verified.png"
            alt="company logo"
            className="mb-4 h-6 w-6"
          />
          <h3 className="mb-2 max-w-64">
            Lorem ipsum dolor afdk sdfd fdkf dfdfkfjdf dfdfkd fdf fdjdkfdf df
            dfdkdfjdf dfdfdfd df.
          </h3>
          <p className="font-light">Sudo 2024</p>
        </div>

        {/* Navigation Links */}
        <LinkHeader />
      </div>

{/* Footer Bottom Section */}
<hr className="border-t-1 border-gray-500 my-6 mx-9"/>
<div className="flex flex-col md:flex-row justify-between items-center w-full">
          <p className="text-sm mb-4 md:mb-0 md:mr-auto mx-12">© 2024 All rights reserved.</p>
          <div className="flex space-x-4 mx-16 ">
            <SocialIcons/>
            </div>
        </div>

    </div>
  );
};

export default Footer;
