
import React from 'react';
import Link from 'next/link'


  
// Sidebar Component
const Sidebar = () => {
    return (
      <div className="sidebar">
        <h2>Options</h2>
        <ul>
          <li>Option 1</li>
          <Link href="\Pairaddress"><li className="link-page">Option 2</li></Link>
        </ul>
      </div>
    );
  };


export default Sidebar