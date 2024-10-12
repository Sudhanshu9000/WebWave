import React from 'react'
import Navigation from './Navigation'


const LinkHeader = () => {
    const sections = [
        {
          heading: 'Heading 1',
          links: [
            { href: '#link1', text: 'Link 1' },
            { href: '#link2', text: 'Link 2' },
            { href: '#link3', text: 'Link 3' },
          ],
        },
        {
          heading: 'Heading 2',
          links: [
            { href: '#link4', text: 'Link 4' },
            { href: '#link5', text: 'Link 5' },
            { href: '#link6', text: 'Link 6' },
          ],
        },
        {
          heading: 'Heading 3',
          links: [
            { href: '#link7', text: 'Link 7' },
            { href: '#link8', text: 'Link 8' },
            { href: '#link9', text: 'Link 9' },
          ],
        },
      ];


return <Navigation sections={sections} />
};

export default LinkHeader;