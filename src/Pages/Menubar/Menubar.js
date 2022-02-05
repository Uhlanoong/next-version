import React from 'react';
import { Link } from 'react-router-dom';
import './Menubar.css'

const Menubar = () => {
    return (
        <div>
            <nav className='navbar'>
                <h4 className='logo'>Feed Calculation</h4>
                <ul className='nav-links'>
                    <Link to = "/solution" className='solution'>
                        <li>Solution</li>
                    </Link>
                    <Link to = "/database" className='database'>
                        <li>Database</li>
                    </Link>
                    <Link to = "/add-data" className='adddata'>
                        <li>AddData</li>
                    </Link>
                    <Link to = "/species-reference-data" className='savedata'>
                        <li>Saved Data</li>
                    </Link>
                </ul>
            </nav>
        </div>
    );
};

export default Menubar;