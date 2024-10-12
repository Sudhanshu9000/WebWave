import React from 'react'
const Navigation = ({sections}) => {
    return (
     <div  className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-12 text-center">
        {sections.map((section, index) => (
            <div key={index}>
                <h4 className='font-bold mb-2'>{section.heading}</h4>
                {section.links.map((link, linkIndex) => (
                    <a 
                    key={linkIndex}
                    href={link.href}
                    className= "block hover:text-gray-400"
                    >
                        {link.text}
                    </a>
                ))}
            </div>
        ))}
     </div>
    );
  };
  
  export default Navigation
