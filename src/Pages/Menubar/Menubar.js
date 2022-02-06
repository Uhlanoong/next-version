import React from 'react';
// import { Link } from 'react-router-dom';
import './Menubar.css'

const Menubar = () => {
    return (
        <div>
            <nav className='navbar'>
                <h4 className='logo'>Feed Calculation</h4>
                <ul className='nav-links'>
                    <li><a href='/solution'>Solution</a></li>
                    <li><a href='/database'>Database</a></li>
                    <li><a href='add-data'>Add Data</a></li>
                    <li><a href='/species-reference-data'>Saved Data</a></li>
                    {/* <Link to = "/solution" className='solution'></Link>
                    <Link to = "/database" className='database'></Link>
                    <Link to = "/add-data" className='adddata'></Link>
                    <Link to = "/species-reference-data" className='savedata'>
                        
                    </Link> */}
                </ul>
            </nav>
        </div>
    );
};

export default Menubar;